import time
from collections import namedtuple
from functools import partial
from random import choices, randint, randrange, random
from typing import List, Callable, Tuple
import matplotlib.pyplot as plt
from statistics import mean

Genome = List[int]
Population = List[Genome]
FitnessFunc = Callable[[Genome], int]
PopulateFunc = Callable[[], Population]  # fn that takes nothing and spits out Population
SelectionFunc = Callable[[Population, FitnessFunc], Tuple[Genome, Genome]]
CrossoverFunc = Callable[[Genome, Genome], Tuple[Genome, Genome]]
MutationFunc = Callable[[Genome], Genome]
Thing = namedtuple('Thing', ['name', 'value', 'weight'])

backpack_items = [
    Thing('Zegar', 100, 7),
    Thing('Obraz-pejzaż', 300, 7),
    Thing('Obraz-portret', 200, 6),
    Thing('Radio', 40, 2),
    Thing('Laptop', 500, 5),
    Thing('Lampka nocna', 70, 6),
    Thing('Srebrne sztućce', 100, 1),
    Thing('Porcelana', 250, 3),
    Thing('Figura z brązu', 300, 10),
    Thing('Skórzana torebka', 280, 3),
    Thing('Odkurzacz', 300, 15),
]

backpack_capacity = 25


def generate_genome(length: int) -> Genome:
    return choices([0, 1], k=length)

def generate_population(size: int, genome_length: int) -> Population:
    return [generate_genome(genome_length) for _ in range(size)]


avgFitness = []
maxFitness = []
def forEachGeneration(population: [Genome], fitness_func: FitnessFunc) -> None:
    fitness = list(map(fitness_func, population))
    avgFitness.append(mean(fitness))
    maxFitness.append(max(fitness))


# FITNESS FUNCTION
def fitness(genome: Genome, things: [Thing], weight_limit: int) -> int:
    if len(genome) != len(things):
        print(genome)
        print(things)
        raise ValueError("genome and things must be of the same length")

    weight = 0
    value = 0

    for i, thing in enumerate(things):
        if genome[i] == 1:  # element in the bag
            weight += thing.weight
            value += thing.value

            if weight > weight_limit:
                return 0  # bag limit exceeded

    return value


# SELECTION FUNCTION
# Selects a pair of 2 solutions that will be the parents of 2 new solution of next generation
def selection_pair(population: Population, fitness_func: FitnessFunc) -> Population:
    return choices(
        k=2,  # returns a list of 2 items
        population=population,  # from population
        weights=[fitness_func(gnome) for gnome in population],  # solutions with higher fitness should have higher probability
        # of being chosen
    )


# CROSSOVER FUNCTION
# Sample input [1, 1], [0, 0]
# Sample output [1, 0], [0, 1]
# or
# Sample input [1, 1, 1, 1, 1], [0, 0 ,0 ,0, 0]
# Sample output [1, 1, 1, 1, 0], [0, 0, 0, 0, 1]
def single_point_crossover(a: Genome, b: Genome) -> Tuple[Genome, Genome]:
    if len(a) != len(b):
        raise ValueError("Genomes a and b must be of same length")

    length = len(a)

    if length < 2:
        return a, b

    # randomly chose an index to cut a genome in half
    p = randint(1, length - 1)

    return a[0:p] + b[p:], b[0:p] + a[p:]


# Sample Input [1,1,1,1,1]
# Sample Output [1,0,1,1,1] (only element at index 1 was mutated)
def mutation(genome: Genome, numberOfMutations: int = 1, mutationProbability: float = 0.5) -> Genome:
    for _ in range(numberOfMutations):
        randomGenomeIndex = randrange(len(genome))
        # leaves genome the same
        # OR turns 1 into 0 or 0 into 1
        # based on the mutation probability
        genome[randomGenomeIndex] = genome[randomGenomeIndex] if random() > mutationProbability else abs(genome[randomGenomeIndex] - 1)

    return genome


# fitness_limit - if the fitness of the best solution exceeds this limit, we are done
# generation_limit - maximum number of generation our evolution runs for, if it is not reaching the fitness limit before that
def run_evolution(populate_func: PopulateFunc,
                  fitness_func: FitnessFunc,
                  fitness_limit: int,
                  selection_func: SelectionFunc = selection_pair,
                  crossover_func: CrossoverFunc = single_point_crossover,
                  mutation_func: MutationFunc = mutation,
                  generation_limit: int = 100) -> Tuple[Population, int]:

    # random genomes:
    # for population size = 2 and genome_length of 10, it can be: [[0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    population = populate_func()


    for i in range(generation_limit):
        #  sort populations based on their fitness
        population = sorted(population, key=lambda genome: fitness_func(genome), reverse=True)

        #  if the genome already meets our requirements (ie. value of items of things in backpack is enough for us, we can exit)
        if fitness_func(population[0]) >= fitness_limit:
            break

        forEachGeneration(population, fitness_func)

        # Pick two best genomes from population
        # Elitism involves copying a small proportion of the fittest candidates, unchanged, into the next generation.
        next_generation = population[0:2]

        #  Loop as long as its needed to create a new generation with size equal to previous one
        for j in range(int(len(population) / 2) - 1):
            # Randomly pick parents, but genomes with higher fitness have bigger change of being picked
            parents = selection_func(population, fitness_func)
            # Create offsprings by crossing over genomes of parents
            offspring_a, offspring_b = crossover_func(parents[0], parents[1])
            # Mutate offspring genomes
            offspring_a = mutation_func(offspring_a)
            offspring_b = mutation_func(offspring_b)
            # Add to the new generation
            next_generation += [offspring_a, offspring_b]

        population = next_generation

    return population, i


start = time.time()
population, generations = run_evolution(
    populate_func=partial(generate_population, size=10, genome_length=len(backpack_items)),
    fitness_func=partial(fitness, things=backpack_items, weight_limit=backpack_capacity),
    fitness_limit=1630,  # value limit that makes us satisfied with the solution, 1630
    generation_limit=100  # so that we don't loop forever when fitness limit is never reached
)
end = time.time()


# Helper function to read result
def genome_to_things(genome: Genome, things: [Thing]) -> [Thing]:
    result = []
    total_value = 0
    total_weight = 0
    for i, thing in enumerate(things):
        if genome[i] == 1:
            total_value += thing.value
            total_weight += thing.weight
            result += [thing.name + " " + str(thing.value)]

    result += ['Total value: ' + str(total_value)]
    result += ['Total weight: ' + str(total_weight)]

    return result


print(f"number of generations, {generations}")
# print(f"time: {end - start}s")
# print(f"best solution, {genome_to_things(population[0], backpack_items)}")
# print(f"Solution:, {genome_to_things(population[0], backpack_items)}")
#

def showPlot() -> None:
    plt.title('Dzialanie Alg. Genetycznego')
    plt.xlabel('pokolenie')
    plt.ylabel('fitness (ocena)')

    _generations = [i + 1 for i in range(generations)]

    plt.plot(_generations, avgFitness, marker='.', color='blue')
    plt.plot(_generations, maxFitness, marker='', color='red')
    plt.legend(['srednia', 'maksymalnie'])
    plt.show()


showPlot()


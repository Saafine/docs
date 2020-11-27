from random import choices, randint, randrange, random

from algorithms.maze.helpers import get_coords_for_field
from algorithms.maze.types import *
from algorithms.maze.variables import MUTATIONS, mazeDef
from algorithms.maze.visualize import visualizeMaze


def generate_genome(length: int, exclude: Move = None) -> Genome:
    moves = list(filter(lambda move: move != exclude, [Move.BOTTOM, Move.TOP, Move.RIGHT, Move.LEFT]))
    return choices(moves, k=length)


def generate_population(size: int, genome_length: int) -> Population:
    return [generate_genome(genome_length) for _ in range(size)]


# SELECTION FUNCTION
# Selects a pair of 2 solutions that will be the parents of 2 new solution of next generation
def selection_pair(population: Population, fitness_func: FitnessFunc) -> Population:
    return choices(
        k=2,  # returns a list of 2 items
        population=population,  # from population
        weights=[fitness_func(gnome) for gnome in population],  # solutions with higher fitness should have higher probability of being chosen
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


# # Sample Input [1,1,1,1,1]
# # Sample Output [1,0,1,1,1] (only element at index 1 was mutated)
# if mutation is too big, it will never reach the end
# if mutation is too small, he will never grow
def mutation(genome: Genome, number_of_mutations: int = MUTATIONS, mutation_probability: float = 0.5) -> Genome:
    for _ in range(number_of_mutations):
        randomGenomeIndex = randrange(len(genome))
        # leaves genome the same
        # OR turns 1 into 0 or 0 into 1
        # based on the mutation probability
        # TODO RANDOM GENOME
        genome[randomGenomeIndex] = genome[randomGenomeIndex] if random() > mutation_probability else generate_genome(1)[0]

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

        visualizeMaze(maze=mazeDef, moves=population[0], start=get_coords_for_field(mazeDef, START),
                      maze_name="generation" + str(i) + "_" + str(fitness_func(population[0])) + "_" + str("_"))

        #  if the genome already meets our requirements (ie. value of items of things in backpack is enough for us, we can exit)
        if fitness_func(population[0]) >= fitness_limit:
            print('SUCCESS')
            break

        # Pick two best genomes from population
        # Elitism involves copying a small proportion of the fittest candidates, unchanged, into the next generation.
        next_generation = population[0:2]

        # visualizeMaze(mazeDef, next_generation[0], start=get_coords_for_field(mazeDef, START))

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

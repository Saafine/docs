import time
from functools import partial
from random import choices, randint, randrange, random

from python.types import *
from python.visualize import visualizeMaze

mazeDef: Maze = [
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
    [WALL, START, PATH, PATH, WALL, PATH, PATH, PATH, WALL, PATH, PATH, WALL],
    [WALL, WALL, WALL, PATH, PATH, PATH, WALL, PATH, WALL, WALL, PATH, WALL],
    [WALL, PATH, PATH, PATH, WALL, PATH, WALL, PATH, PATH, PATH, PATH, WALL],
    [WALL, PATH, WALL, PATH, WALL, WALL, PATH, PATH, WALL, WALL, PATH, WALL],
    [WALL, PATH, PATH, WALL, WALL, PATH, PATH, PATH, WALL, PATH, PATH, WALL],
    [WALL, PATH, PATH, PATH, PATH, PATH, WALL, PATH, PATH, PATH, WALL, WALL],
    [WALL, PATH, WALL, PATH, PATH, WALL, WALL, PATH, WALL, PATH, PATH, WALL],
    [WALL, PATH, WALL, WALL, WALL, PATH, PATH, PATH, WALL, WALL, PATH, WALL],
    [WALL, PATH, WALL, PATH, WALL, WALL, PATH, WALL, PATH, WALL, PATH, WALL],
    [WALL, PATH, WALL, PATH, PATH, PATH, PATH, PATH, PATH, PATH, END, WALL],
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
]

MAX_MOVES = 40
GENERATIONS = 100
SOLUTION_FOUND_FITNESS_VALUE = 10000
DEAD_END_FITNESS_VALUE = -10000
POPULATION_SIZE = 100
DISTANCE_FROM_START_POINTS_MULTIPLIER = 10
DISTANCE_TO_FINISH_POINTS_MULTIPLIER = 20
STEPS_MULTIPLIER = 5


def generate_genome(length: int) -> Genome:
    return choices([Move.BOTTOM, Move.TOP, Move.RIGHT, Move.LEFT], k=length)


def generate_population(size: int, genome_length: int) -> Population:
    return [generate_genome(genome_length) for _ in range(size)]


def distance(fromXY: Coords, toXY: Coords) -> int:
    return abs(fromXY[0] - toXY[0]) + abs(fromXY[1] - toXY[1])


def get_next_move_coords(fromXY: Coords, move: Move) -> Coords:
    if move == Move.TOP:
        return [fromXY[0] - 1, fromXY[1]]
    elif move == Move.RIGHT:
        return [fromXY[0], fromXY[1] + 1]
    elif move == Move.BOTTOM:
        return [fromXY[0] + 1, fromXY[1]]
    elif move == Move.LEFT:
        return [fromXY[0], fromXY[1] - 1]
    else:
        raise ValueError('Illegal move')


def is_valid_move(coords: Coords, maze: Maze) -> bool:
    x = coords[0]
    y = coords[1]
    return (0 <= x < len(maze[0])) and (0 <= y < len(maze))


def get_coords_for_field(maze: Maze, field: int) -> Coords:
    for i, column in enumerate(maze):
        for j, row in enumerate(column):
            if maze[i][j] == field:
                return i, j


def is_dead_end(maze: Maze, prev_coords: Coords, next_coords: Coords) -> bool:
    x = next_coords[0]
    y = next_coords[1]
    surrounding_fields = list(filter(lambda coords: is_valid_move(coords, maze), [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]))
    # print(surrounding_fields)
    exclude_previous = list(filter(lambda coords: coords != prev_coords, surrounding_fields))
    # print(exclude_previous)
    maze_objects = list(map(lambda xy: maze[xy[0]][xy[1]], exclude_previous))
    # print(maze_objects)
    available_paths = list(filter(lambda mazeObject: mazeObject != WALL and mazeObject != DEAD_END, maze_objects))
    # print(available_paths)
    is_dead = len(available_paths) == 0
    return is_dead


def fitness(genome: Genome, maze: Maze, start: Coords, finish: Coords) -> int:
    position: Coords = start
    found_exit = False
    steps = 0

    for index, move in enumerate(genome):
        next_move: Coords = get_next_move_coords(position, move)
        valid_move: bool = is_valid_move(next_move, maze)  # todo withing bounds

        idx = index + 1
        # visualizeMaze(mazeDef, genome[:idx], start=get_coords_for_field(maze, START), maze_name=str(index))

        if valid_move:
            x: int = next_move[0]
            y: int = next_move[1]
            square = maze[x][y]  # todo square ??
            if square == END:
                found_exit = True
                print('SUCCESS')
                print(genome)
                break
            elif square == PATH:
                steps = steps + 1
                if is_dead_end(maze, position, next_move):
                    maze[x][y] = DEAD_END
                    break
                    # return DEAD_END_FITNESS_VALUE # TODO should kill on dead end or just decrease fitness by a lot?
                else:
                    position = next_move
            else:
                # print('dead')
                break
        else:
            break

    # todo how points are calculated
    extra_points = SOLUTION_FOUND_FITNESS_VALUE if found_exit else 0
    return DISTANCE_FROM_START_POINTS_MULTIPLIER * distance(position, start) - DISTANCE_TO_FINISH_POINTS_MULTIPLIER * distance(position, finish) + extra_points + STEPS_MULTIPLIER * steps

# fitness([Move.RIGHT, Move.RIGHT, Move.BOTTOM, Move.RIGHT, Move.RIGHT, Move.LEFT, Move.BOTTOM, Move.LEFT, Move.RIGHT, Move.RIGHT, Move.TOP, Move.RIGHT, Move.BOTTOM, Move.BOTTOM, Move.BOTTOM, Move.BOTTOM, Move.BOTTOM, Move.BOTTOM, Move.LEFT, Move.RIGHT, Move.RIGHT, Move.BOTTOM, Move.RIGHT, Move.BOTTOM, Move.BOTTOM, Move.BOTTOM, Move.TOP, Move.TOP, Move.BOTTOM, Move.LEFT, Move.BOTTOM, Move.RIGHT, Move.RIGHT, Move.RIGHT, Move.RIGHT, Move.LEFT, Move.LEFT, Move.RIGHT, Move.RIGHT, Move.BOTTOM], mazeDef, start=get_coords_for_field(mazeDef, START), finish=get_coords_for_field(mazeDef, END))
# fitness([Move.RIGHT, Move.RIGHT, Move.BOTTOM, Move.RIGHT, Move.RIGHT, Move.LEFT, Move.BOTTOM], mazeDef, start=get_coords_for_field(mazeDef, START), finish=get_coords_for_field(mazeDef, END))
# result = fitness([Move.RIGHT, Move.RIGHT, Move.BOTTOM, Move.RIGHT, Move.RIGHT, Move.TOP], mazeDef, start=get_coords_for_field(mazeDef, START), finish=get_coords_for_field(mazeDef, END))
# print(result)
# # SELECTION FUNCTION
# # Selects a pair of 2 solutions that will be the parents of 2 new solution of next generation
def selection_pair(population: Population, fitness_func: FitnessFunc) -> Population:
    return choices(
        k=2,  # returns a list of 2 items
        population=population,  # from population
        weights=[fitness_func(gnome) for gnome in population],  # solutions with higher fitness should have higher probability of being chosen
    )


# # CROSSOVER FUNCTION
# # Sample input [1, 1], [0, 0]
# # Sample output [1, 0], [0, 1]
# # or
# # Sample input [1, 1, 1, 1, 1], [0, 0 ,0 ,0, 0]
# # Sample output [1, 1, 1, 1, 0], [0, 0, 0, 0, 1]
def single_point_crossover(a: Genome, b: Genome) -> Tuple[Genome, Genome]:
    if len(a) != len(b):
        raise ValueError("Genomes a and b must be of same length")

    length = len(a)

    if length < 2:
        return a, b

    # randomly chose an index to cut a genome in half
    p = randint(1, length - 1)

    return a[0:p] + b[p:], b[0:p] + a[p:]


#
# # Sample Input [1,1,1,1,1]
# # Sample Output [1,0,1,1,1] (only element at index 1 was mutated)
# todo number of mutations
def mutation(genome: Genome, number_of_mutations: int = 20, mutation_probability: float = 0.5) -> Genome:
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
        #  if the genome already meets our requirements (ie. value of items of things in backpack is enough for us, we can exit)
        if fitness_func(population[0]) >= fitness_limit:
            print("good enough")
            break

        # Pick two best genomes from population
        # Elitism involves copying a small proportion of the fittest candidates, unchanged, into the next generation.
        next_generation = population[0:2]
        # visualizeMaze(maze=mazeDef, moves=population[5], start=get_coords_for_field(mazeDef, START), maze_name=str(i))

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
        # print(population)
        # print(fitness_func(population[0]))
        # print(fitness_func(population[1]))
        # print(fitness_func(population[2]))

    return population, i


# TODO PARTIAL FAILING
def main():
    def use_fitness(genome: Genome):
        return fitness(genome, maze=mazeDef, start=get_coords_for_field(mazeDef, START), finish=get_coords_for_field(mazeDef, END))

    start = time.time()
    population, generations = run_evolution(
        fitness_func=use_fitness,
        populate_func=partial(generate_population, size=POPULATION_SIZE, genome_length=MAX_MOVES),
        fitness_limit=SOLUTION_FOUND_FITNESS_VALUE,  # value limit that makes us satisfied with the solution
        generation_limit=GENERATIONS  # so that we don't loop forever when fitness limit is never reached
    )
    end = time.time()
    visualizeMaze(maze=mazeDef, moves=population[0], start=get_coords_for_field(mazeDef, START), maze_name="1")
    visualizeMaze(maze=mazeDef, moves=population[1], start=get_coords_for_field(mazeDef, START), maze_name="2")


main()

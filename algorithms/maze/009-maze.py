import time
from functools import partial
from random import choices, randint, randrange, random

from algorithms.maze.types import *
from algorithms.maze.visualize import visualizeMaze
from algorithms.maze.genMaze2 import get_maze

# mazeDef: Maze = [
#     [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
#     [WALL, START, PATH, PATH, WALL, PATH, PATH, PATH, WALL, PATH, PATH, WALL],
#     [WALL, WALL, WALL, PATH, PATH, PATH, WALL, PATH, WALL, WALL, PATH, WALL],
#     [WALL, PATH, PATH, PATH, WALL, PATH, WALL, PATH, PATH, PATH, PATH, WALL],
#     [WALL, PATH, WALL, PATH, WALL, WALL, PATH, PATH, WALL, WALL, PATH, WALL],
#     [WALL, PATH, PATH, WALL, WALL, PATH, PATH, PATH, WALL, PATH, PATH, WALL],
#     [WALL, PATH, PATH, PATH, PATH, PATH, WALL, PATH, PATH, PATH, WALL, WALL],
#     [WALL, PATH, WALL, PATH, PATH, WALL, WALL, PATH, WALL, PATH, PATH, WALL],
#     [WALL, PATH, WALL, WALL, WALL, PATH, PATH, PATH, WALL, WALL, PATH, WALL],
#     [WALL, PATH, WALL, PATH, WALL, WALL, PATH, WALL, PATH, WALL, PATH, WALL],
#     [WALL, PATH, WALL, PATH, PATH, PATH, PATH, PATH, PATH, PATH, END, WALL],
#     [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
# ]

mazeDef: Maze = get_maze(size=[12, 12])

MAX_MOVES = 300
GENERATIONS = 1000
POPULATION_SIZE = 30
MUTATIONS = 100  # 15

# FITNESS
SOLUTION_FOUND_FITNESS_VALUE = 10000
DEAD_END_FITNESS_VALUE = -10000
DISTANCE_TO_FINISH_POINTS_MULTIPLIER = 1  # 25, this is negative points
STEPS_MULTIPLIER = 20

# MUTATION
MUTATION_PREF = 0


def generate_genome(length: int, exclude: Move = None) -> Genome:
    moves = list(filter(lambda move: move != exclude, [Move.BOTTOM, Move.TOP, Move.RIGHT, Move.LEFT]))
    return choices(moves, k=length)


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
    steps = 0
    global MUTATION_PREF
    visits = {}

    for index, move in enumerate(genome):
        next_move: Coords = get_next_move_coords(position, move)
        valid_move: bool = is_valid_move(next_move, maze)  # todo withing bounds

        if valid_move:
            x: int = next_move[0]
            y: int = next_move[1]
            square = maze[x][y]  # todo square ??
            visit_key = str(x) + str(y)

            # prevent circles
            if visit_key in visits:
                break
            else:
                visits[visit_key] = 1

            if square == END:
                return SOLUTION_FOUND_FITNESS_VALUE
            elif square == PATH:
                steps = steps + 1
                if is_dead_end(maze, position, next_move):
                    maze[x][y] = DEAD_END
                    MUTATION_PREF = 0
                    return DEAD_END_FITNESS_VALUE
                else:
                    position = next_move
            else:
                # dead
                break
        else:
            break

    # todo
    MUTATION_PREF = max(steps, MUTATION_PREF)

    return - DISTANCE_TO_FINISH_POINTS_MULTIPLIER * distance(position, finish) + STEPS_MULTIPLIER * steps


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


# todo numerowanie krokow

#
# # Sample Input [1,1,1,1,1]
# # Sample Output [1,0,1,1,1] (only element at index 1 was mutated)
# todo number of mutations
# if mutation is too big, it will never reach the end
# if mutation is too small, he will never grow
def mutation(genome: Genome, number_of_mutations: int = MUTATIONS, mutation_probability: float = 0.5) -> Genome: # todo mutation probability
    for _ in range(number_of_mutations):
        randomGenomeIndex = randrange(MUTATION_PREF, min(MUTATION_PREF + 2, len(genome)))
        print(MUTATION_PREF)
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
                      maze_name="generation" + str(i) + "_" + str(fitness_func(population[0])) + "_" + str(MUTATION_PREF))

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


# TODO PARTIAL FAILING
import os
import glob


def main():
    def use_fitness(genome: Genome):
        return fitness(genome, maze=mazeDef, start=get_coords_for_field(mazeDef, START), finish=get_coords_for_field(mazeDef, END))

    clear_folder()
    start = time.time()
    population, generations = run_evolution(
        fitness_func=use_fitness,
        populate_func=partial(generate_population, size=POPULATION_SIZE, genome_length=MAX_MOVES),
        fitness_limit=SOLUTION_FOUND_FITNESS_VALUE,  # value limit that makes us satisfied with the solution
        generation_limit=GENERATIONS  # so that we don't loop forever when fitness limit is never reached
    )
    end = time.time()
    # visualizeMaze(maze=mazeDef, moves=population[0], start=get_coords_for_field(mazeDef, START), maze_name="1")
    # visualizeMaze(maze=mazeDef, moves=population[1], start=get_coords_for_field(mazeDef, START), maze_name="2")


def clear_folder() -> None:
    folder = 'C:\Projects\docs\python\pics'
    files = glob.glob('C:/Projects/docs/python/pics/*')
    for f in files:
        os.remove(f)


main()

import time
from functools import partial
from random import choices, randint, randrange, random
from algorithms.maze.dfs_solve import find_exit_bfs
from algorithms.maze.example_maze import standard_maze
from algorithms.maze.generator import get_maze
from algorithms.maze.helpers import get_coords_for_field, get_next_move_coords, is_dead_end, distance, clear_folder, map_coords_to_moves
from algorithms.maze.types import *
from algorithms.maze.variables import MUTATIONS, SOLUTION_FOUND_FITNESS_VALUE, DEAD_END_FITNESS_VALUE, STEPS_MULTIPLIER, NEGATIVE_FINISH_MULTIPLIER, POPULATION_SIZE, MAX_MOVES, GENERATIONS, \
    START, END, DEAD_END, PATH
from algorithms.maze.visualize import visualize_maze

# MAZE: Maze = standard_maze
MAZE: Maze = get_maze(size=[3, 3])  # * 2 + 1

def generate_genome(length: int) -> Genome:
    return choices([Move.BOTTOM, Move.TOP, Move.RIGHT, Move.LEFT], k=length)


def generate_population(size: int, genome_length: int) -> Population:
    return [generate_genome(genome_length) for _ in range(size)]


def selection_pair(population: Population, fitness_func: FitnessFunc) -> Population:
    return choices(
        k=2,  # returns a list of 2 items
        population=population,  # from population
        weights=[fitness_func(gnome) for gnome in population],  # solutions with higher fitness should have higher probability of being chosen
    )


def single_point_crossover(a: Genome, b: Genome) -> Tuple[Genome, Genome]:
    if len(a) != len(b):
        raise ValueError("Genomes a and b must be of same length")

    length = len(a)

    if length < 2:
        return a, b

    p = randint(1, length - 1)

    return a[0:p] + b[p:], b[0:p] + a[p:]


def mutation(genome: Genome, number_of_mutations: int = MUTATIONS, mutation_probability: float = 0.2) -> Genome:
    genome_len = len(genome)
    for _ in range(number_of_mutations):
        randomGenomeIndex = randrange(genome_len)
        if random() < mutation_probability:
            genome[randomGenomeIndex] = generate_genome(1)[0]

    return genome


def run_evolution(populate_func: PopulateFunc,
                  fitness_func: FitnessFunc,
                  fitness_limit: int,
                  selection_func: SelectionFunc = selection_pair,
                  crossover_func: CrossoverFunc = single_point_crossover,
                  mutation_func: MutationFunc = mutation,
                  generation_limit: int = 100) -> Tuple[Population, int]:

    population = populate_func()

    for i in range(generation_limit):
        population = sorted(population, key=lambda genome: fitness_func(genome), reverse=True)

        visualize_maze(maze=MAZE, moves=population[0], start=get_coords_for_field(MAZE, START),
                       maze_name="generation_" + str(i))

        if fitness_func(population[0]) >= fitness_limit:
            print('SUCCESS')
            break

        next_generation = population[0:2]

        for j in range(int(len(population) / 2) - 1):
            parents = selection_func(population, fitness_func)
            offspring_a, offspring_b = crossover_func(parents[0], parents[1])
            offspring_a = mutation_func(offspring_a)
            offspring_b = mutation_func(offspring_b)
            next_generation += [offspring_a, offspring_b]

        population = next_generation

    return population, i


def fitness(genome: Genome, maze: Maze, start: Coords, finish: Coords) -> int:
    position: Coords = start
    steps = 0
    visits = {}

    for index, move in enumerate(genome):
        next_move: Coords = get_next_move_coords(position, move)

        x: int = next_move[0]
        y: int = next_move[1]
        cell = maze[x][y]
        visit_key = 'x' + str(x) + 'y' + str(y)

        if visit_key in visits:
            break
        else:
            visits[visit_key] = 1

        if cell == END:
            return SOLUTION_FOUND_FITNESS_VALUE
        elif cell == PATH:
            if is_dead_end(maze, position, next_move):
                maze[x][y] = DEAD_END
                return DEAD_END_FITNESS_VALUE
            else:
                steps = steps + 1
                position = next_move
        else:
            break

    distance_to_finish = distance(position, finish)

    return STEPS_MULTIPLIER * steps - NEGATIVE_FINISH_MULTIPLIER * distance_to_finish


def main():
    def use_fitness(genome: Genome):
        return fitness(genome, maze=MAZE, start=get_coords_for_field(MAZE, START), finish=get_coords_for_field(MAZE, END))

    clear_folder()

    start_coords = get_coords_for_field(MAZE, START)
    start = time.time()
    bfs_exit_path = find_exit_bfs(maze=MAZE, position=start_coords)
    end = time.time()
    print(f'BFS Time to complete: {end - start}')
    bfs_exit_moves = map_coords_to_moves(bfs_exit_path)
    visualize_maze(maze=MAZE, moves=bfs_exit_moves, start=start_coords, maze_name="bfs")

    start = time.time()
    population, generations = run_evolution(
        fitness_func=use_fitness,
        populate_func=partial(generate_population, size=POPULATION_SIZE, genome_length=MAX_MOVES),
        fitness_limit=SOLUTION_FOUND_FITNESS_VALUE,  # value limit that makes us satisfied with the solution
        generation_limit=GENERATIONS  # so that we don't loop forever when fitness limit is never reached
    )
    end = time.time()
    print(f'GA Time to complete: {end - start}')


main()

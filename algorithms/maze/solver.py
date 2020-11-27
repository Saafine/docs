import time
from functools import partial
from algorithms.maze.generator import Maze
from algorithms.maze.genetic_fns import generate_population, run_evolution
from algorithms.maze.helpers import get_coords_for_field, is_dead_end, is_valid_move, get_next_move_coords, distance, clear_folder
from algorithms.maze.types import Genome, Coords, END, PATH, DEAD_END, START
from algorithms.maze.variables import SOLUTION_FOUND_FITNESS_VALUE, DEAD_END_FITNESS_VALUE, DISTANCE_TO_FINISH_POINTS_MULTIPLIER, STEPS_MULTIPLIER, mazeDef, POPULATION_SIZE, MAX_MOVES, GENERATIONS


def fitness(genome: Genome, maze: Maze, start: Coords, finish: Coords) -> int:
    position: Coords = start
    steps = 0
    # global MUTATION_PREF
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
                    # MUTATION_PREF = 0
                    return DEAD_END_FITNESS_VALUE
                else:
                    position = next_move
            else:
                # dead
                break
        else:
            break

    # MUTATION_PREF = max(steps, MUTATION_PREF)

    return - DISTANCE_TO_FINISH_POINTS_MULTIPLIER * distance(position, finish) + STEPS_MULTIPLIER * steps


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


main()

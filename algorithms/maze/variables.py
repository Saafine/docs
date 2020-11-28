from algorithms.maze.example_maze import standard_maze
from algorithms.maze.generator import get_maze
from algorithms.maze.types import Maze

PATH_TO_MAZE_IMAGE_OUTPUT = 'C:/Projects/docs/algorithms/maze/maze_paths/*'

# mazeDef: Maze = standard_maze
mazeDef: Maze = get_maze(size=[5, 5])

MAX_MOVES = 40
GENERATIONS = 500
POPULATION_SIZE = 50
MUTATIONS = 10

# FITNESS
SOLUTION_FOUND_FITNESS_VALUE = 10000
DEAD_END_FITNESS_VALUE = -10000
NEGATIVE_FINISH_MULTIPLIER = 5  # 25, this is negative points
STEPS_MULTIPLIER = 25

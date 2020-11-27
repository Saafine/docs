from algorithms.maze.generator import get_maze
from algorithms.maze.types import Maze

mazeDef: Maze = get_maze(size=[12, 12])
# mazeDef: Maze = standard_maze

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
# MUTATION_PREF = 0

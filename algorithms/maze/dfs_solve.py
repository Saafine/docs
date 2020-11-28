import time

from algorithms.maze.example_maze import standard_maze
from algorithms.maze.generator import get_maze
from algorithms.maze.helpers import get_neighbours, get_coords_for_field, map_coords_to_moves
from algorithms.maze.types import Maze, Coords, Move, START, PATH, END
from typing import List

from algorithms.maze.visualize import visualize_maze

visits = {}


def find_exit_bfs(maze: Maze, position: Coords, path: List[Move] = []) -> List[Move]:
    x = position[0]
    y = position[1]

    if maze[x][y] == END:
        return path

    neighbours = get_neighbours(maze, position)
    neighbour_paths = list(filter(lambda coords: maze[coords[0]][coords[1]] == PATH or maze[coords[0]][coords[1]] == END, neighbours))
    neighbour_paths_unvisited = list(filter(lambda coords: not 'x' + str(coords[0]) + 'y' + str(coords[1]) in visits, neighbour_paths))
    visits['x' + str(x) + 'y' + str(y)] = True

    for next_position in neighbour_paths_unvisited:
        try_path = find_exit_bfs(maze, next_position, path + [position])
        if len(try_path) > 0:
            return try_path

    return []


# maze_to_search = standard_maze
# maze_to_search = get_maze(size=[20, 20])
# start_coords = get_coords_for_field(maze_to_search, START)
#
# start = time.time()
# exit_path = find_exit_bfs(maze_to_search, start_coords)
# end = time.time()
#
# exit_moves = map_coords_to_moves(exit_path)

# visualize_maze(maze=maze_to_search, moves=exit_moves, start=start_coords,
#                maze_name="bfs")

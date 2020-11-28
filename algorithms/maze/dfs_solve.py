from typing import List
from algorithms.maze.helpers import get_neighbours
from algorithms.maze.types import Maze, Coords, Move
from algorithms.maze.variables import END, PATH

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

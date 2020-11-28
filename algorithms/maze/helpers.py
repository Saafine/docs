import glob
import os
from algorithms.maze.types import *
from algorithms.maze.variables import PATH_TO_MAZE_IMAGE_OUTPUT


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


def distance(fromXY: Coords, toXY: Coords) -> int:
    return abs(fromXY[0] - toXY[0]) + abs(fromXY[1] - toXY[1])


def clear_folder() -> None:
    files = glob.glob(PATH_TO_MAZE_IMAGE_OUTPUT)
    for f in files:
        os.remove(f)

def get_average(list):
    return sum(list) / len(list)

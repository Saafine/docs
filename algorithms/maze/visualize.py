from algorithms.maze.helpers import get_next_move_coords
from algorithms.maze.types import *
from PIL import Image, ImageDraw, ImageFont
import copy
from algorithms.maze.variables import WALL, START, END, VISIT, DEAD_END, PATH

SIZE = 100

TYPE_TO_COLOR = {
    WALL: (0, 0, 0),
    PATH: (255, 255, 255),
    START: (102, 255, 115),
    END: (0, 26, 255),
    VISIT: (255, 4, 0),
    DEAD_END: (240, 229, 255),
}

MAZE_BACKGROUND = (211, 255, 213)


def visualize_maze(maze: Maze, moves: List[Move], start: Coords, maze_name: str = '0') -> None:
    maze = copy.deepcopy(maze)
    MAZE_COLUMNS = len(maze)
    MAZE_ROWS = len(maze)
    out = Image.new('RGB', (MAZE_COLUMNS * SIZE, MAZE_ROWS * SIZE), MAZE_BACKGROUND)
    d = ImageDraw.Draw(out)

    position = start
    font = ImageFont.truetype('impact.ttf', size=20)
    for index, move in enumerate(moves):
        next_move: Coords = get_next_move_coords(position, move)
        x: int = next_move[0]
        y: int = next_move[1]
        position = next_move
        if maze[x][y] == WALL:
            break
        elif maze[x][y] == END:
            maze[x][y] = VISIT
            break
        else:
            maze[x][y] = VISIT

    for i, column in enumerate(maze):
        for j, row in enumerate(column):
            if row == PATH:
                d.rectangle((j * SIZE, i * SIZE, j * SIZE + SIZE, i * SIZE + SIZE), fill=(0, 198, 255))
                d.rectangle((j * SIZE + 2, i * SIZE + 2, j * SIZE - 2 + SIZE, i * SIZE + SIZE - 2), fill=TYPE_TO_COLOR[PATH])
            else:
                d.rectangle((j * SIZE, i * SIZE, j * SIZE + SIZE, i * SIZE + SIZE), fill=TYPE_TO_COLOR[row])
            cell_name = '(' + str(i) + ', ' + str(j) + ')'
            d.text((j * SIZE, i * SIZE), cell_name, fill=(0, 0, 0), font=font)
    out.save("maze_paths/" + maze_name + ".jpg")
    out.close()

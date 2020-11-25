from python.types import *
from PIL import Image, ImageDraw
import copy

MAZE_ROWS = 12
MAZE_COLUMNS = 12
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


# todo reuse
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

def visualizeMaze(maze: Maze, moves: List[Move], start: Coords, maze_name: str = '0') -> None:
    maze = copy.deepcopy(maze)
    out = Image.new('RGB', (MAZE_COLUMNS * SIZE, MAZE_ROWS * SIZE), MAZE_BACKGROUND)
    d = ImageDraw.Draw(out)

    position = start

    for index, move in enumerate(moves):
        next_move: Coords = get_next_move_coords(position, move)
        x: int = next_move[0]
        y: int = next_move[1]
        position = next_move
        if maze[x][y] == WALL:
            break
        elif maze[x][y] == END:
            maze[x][y] = VISIT
            print("printing end")
            break
        else:
            maze[x][y] = VISIT

    for i, column in enumerate(maze):
        for j, row in enumerate(column):
            d.rectangle((j * SIZE, i * SIZE, j * SIZE + SIZE, i * SIZE + SIZE), fill=TYPE_TO_COLOR[row])
    out.save("pics/" + maze_name + ".jpg")
    out.close()

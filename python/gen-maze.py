import random
import math
import enum
from typing import List

from pydantic import PositiveInt
from pydantic.dataclasses import dataclass


class Field(enum.Enum):
    Reachable = True
    Unreachable = False

    def __bool__(self) -> bool:
        return not self is Field.Unreachable


@dataclass
class Labirynth:
    def __init__(self, x_size: PositiveInt, y_size: PositiveInt, obstacles=None, start=None, end=None):
        self.x_size = x_size
        self.y_size = y_size

        self.obstacles = set(obstacles) if obstacles is not None else set()

        self.start = (0,0) if start is None else start
        self.end = (x_size - 1, y_size - 1) if end is None else end

        assert self[self.start] is Field.Reachable
        assert self[self.end] is Field.Reachable

    def __getitem__(self, item) -> Field:
        x, y = item

        if x >= self.x_size:
            raise ValueError(f"coorinate x={x} is out of x-bound={self.x_size - 1} of the labirynth")
        if y >= self.y_size:
            raise ValueError(f"coorinate y={y} is out of y-bound={self.y_size - 1} of the labirynth")

        if item in self.obstacles:
            return Field.Unreachable
        else:
            return Field.Reachable

    def __repr__(self):
        header = "   " + "#" * (self.x_size + 2)
        numbered_header = "    " + "".join((str(x)[-1] if str(x)[-1] != "0" else "+" for x in range(self.x_size))) + " "

        contents = (((f"{str(i)[-1]}  #" if str(i)[-1] != "0" else "+  #") + "".join((" " if self[i, j] else "o" \
                                                                                      for j in range(self.y_size))) + "#") \
                    for i in range(self.x_size))

        return "\n".join([numbered_header, header, *contents, header])


def make_labirynth(x_size, y_size, obstacle_fill_percent=10, deterministic=True, seed=1234569):
    """
    The fill percent is just a suggestion and can be off by 2 and the rounding error
    """
    rng = random.Random(seed) if deterministic else random.SystemRandom()

    start = (0,0)
    end = (x_size - 1, y_size - 1)
    obstacles = set()
    obstacle_count = math.floor(x_size * y_size * obstacle_fill_percent / 100)

    for _ in range(obstacle_count):
        x = rng.randint(0, x_size - 1)
        y = rng.randint(0, y_size - 1)

        if (x,y) != start and (x,y) != end:
            obstacles.add((x,y))

    return Labirynth(x_size, y_size, obstacles, start, end)


def demo():
    l = make_labirynth(12, 12, 20, False)
    print(l)

if __name__ == "__main__":
    demo()

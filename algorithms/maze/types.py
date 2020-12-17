from typing import List, Callable, Tuple
from enum import Enum


class Move(Enum):
    TOP = 1
    BOTTOM = 2
    RIGHT = 3
    LEFT = 4


Genome = List[Move]  # sequence of 40 moves T, B, L, R
Population = List[Genome]
FitnessFunc = Callable[[Genome], int]  # distance from exit, calculated by going straight up/down and right
PopulateFunc = Callable[[], Population]  # fn that takes nothing and spits out Population
SelectionFunc = Callable[[Population, FitnessFunc], Tuple[Genome, Genome]]
CrossoverFunc = Callable[[Genome, Genome], Tuple[Genome, Genome]]
MutationFunc = Callable[[Genome, int], Genome]
Maze = List[List[int]]  # maze 12x12 where 0 is path, and 1 is wall
Coords = [int, int]

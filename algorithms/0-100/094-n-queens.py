from typing import List

AvailableSpaces = List[bool]
QueenPositionsAtRows = List[int] or List[None]


def is_valid_place(row: int, col: int, columns: AvailableSpaces,
                   up_diagonals: AvailableSpaces, down_diagonals: AvailableSpaces) -> bool:
    return columns[col] and up_diagonals[row - col] and down_diagonals[row + col]


def update_queen_position(queens: QueenPositionsAtRows, columns: AvailableSpaces,
                          up_diagonals: AvailableSpaces, down_diagonals: AvailableSpaces,
                          row: int, col: int, place_taken: bool) -> None:
    queens[col] = None if place_taken is True else row
    columns[col] = place_taken
    up_diagonals[row - col] = place_taken
    down_diagonals[row + col] = place_taken


def backtrack(queens: QueenPositionsAtRows, size: int, row: int,
              columns: AvailableSpaces, up_diagonals: AvailableSpaces,
              down_diagonals: AvailableSpaces, results: List[AvailableSpaces]) -> None:
    for column in range(size):
        if is_valid_place(row, column, columns, up_diagonals, down_diagonals):
            update_queen_position(queens, columns, up_diagonals, down_diagonals, row, column, False)
            if row + 1 == size:
                results.append(queens.copy())
            else:
                backtrack(queens, size, row + 1, columns, up_diagonals, down_diagonals, results)
            update_queen_position(queens, columns, up_diagonals, down_diagonals, row, column, True)


def solve(size: int) -> QueenPositionsAtRows:
    results: QueenPositionsAtRows = []
    queens: QueenPositionsAtRows = [None] * size
    columns: AvailableSpaces = [True] * size
    diagonals_count: int = 2 * size - 1
    up_diagonals: AvailableSpaces = [True] * diagonals_count
    down_diagonals: AvailableSpaces = [True] * diagonals_count

    backtrack(queens, size, 0, columns, up_diagonals, down_diagonals, results)

    return results


print(solve(8))
print(len(solve(8)))
# [[2, 0, 3, 1], [1, 3, 0, 2]]
# 2 solutions

# print(solve(5))
# [[0, 3, 1, 4, 2], [0, 2, 4, 1, 3], [2, 0, 3, 1, 4], [3, 0, 2, 4, 1], [1, 3, 0, 2, 4], [4, 2, 0, 3, 1], [1, 4, 2, 0, 3], [4, 1, 3, 0, 2], [3, 1, 4, 2, 0], [2, 4, 1, 3, 0]]
# 10 solutions

# print(solve(6))
# [[3, 0, 4, 1, 5, 2], [4, 2, 0, 5, 3, 1], [1, 3, 5, 0, 2, 4], [2, 5, 1, 4, 0, 3]]
# 4 solutions
#
# print(solve(7))
# [[3, 0, 4, 1, 5, 2], [4, 2, 0, 5, 3, 1], [1, 3, 5, 0, 2, 4], [2, 5, 1, 4, 0, 3]]
# 40 solutions

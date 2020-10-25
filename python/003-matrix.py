# Stwórz dwie dowolne macierze 3 x 3 pomnóż je po współrzędnych i wyświetl wynik,
# a następnie pomnóż je macierzowo i wyświetl wynik.

def multiply(a, b):
    return a * b


def getValuesAtColumn(matrix, column):
    valueAtColumnFn = lambda arr: arr[column]
    return list(map(valueAtColumnFn, matrix))


def multiplyRowWithColumn(valuesA, valuesB):
    result = 0
    for index, valueA in enumerate(valuesA):
        result += valueA * valuesB[index]
    return result

def solve():
    matrixA = [[10, 20, 10], [4, 5, 6], [2, 3, 5]]
    matrixB = [[3, 2, 4], [3, 3, 9], [4, 4, 2]]

    result = []
    for indexRow, row in enumerate(matrixA):
        result.append([])
        for indexColumn, column in enumerate(row):
            valuesMatrixB = getValuesAtColumn(matrixB, indexColumn)
            valuesMultiplied = multiplyRowWithColumn(row, valuesMatrixB)
            result[indexRow].append(valuesMultiplied)
    return result

print(solve())

# [[130, 120, 240], [51, 47, 73], [35, 33, 45]]

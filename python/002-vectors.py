# Wczytaj dwa wektory z liczbami [3, 8, 9, 10, 12] oraz [8, 7, 7, 5, 6]. Następnie zwróć
# sumę tych wektorów oraz iloczyn (po współrzędnych) tych wektorów.
# c) Dla powyższych wektorów podaj iloczyn skalarny i długości euklidesowe.
import math


def getVectorResult(listA, listB, callback):
    result = []
    for index, valueA in enumerate(listA):
        result.append(callback(valueA, listB[index]))
    return result


def getSum(a, b):
    return a + b


def getProduct(a, b):
    return a * b


def getDistance(a, b):
    return math.sqrt(a * a + b * b)


vectorA = [3, 8, 9, 10, 12]
vectorB = [8, 7, 7, 5, 6]

vectorSum = getVectorResult(vectorA, vectorB, getSum)  # [11, 15, 16, 15, 18]
vectorProduct = getVectorResult(vectorA, vectorB, getProduct)  # [24, 56, 63, 50, 72]
scalarProduct = sum(vectorProduct)  # 265
distances = getVectorResult(vectorA, vectorB, getDistance)  # [8.54400374531753, 10.63014581273465, 11.40175425099138, 11.180339887498949, 13.416407864998739]

print(vectorSum)
print(vectorProduct)
print(scalarProduct)
print(distances)

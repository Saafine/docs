import random
import statistics


# Stwórz wektor 50 losowych liczb z zakresu od 1 do 100.
def getRandomValuesOfFixedLength():
    return list(map(lambda _: random.randrange(1, 100), [None] * 50))


# Dla wektora z punktu (e) policz średnią z wszystkich jego liczb, min, max oraz
# odchylenie standardowe.
def getAverage(list):
    return sum(list) / len(list)


# Dokonaj normalizacji wektora z podpunktu (e) (ściskamy wszystkie liczby do
# przedziału [0,1]) za pomocą poniższego wzoru (xi to liczba w starym wektorze na
# pozycji i, a zi to liczba w nowym wektorze na pozycji i)
# W oryginalnym wektorze jakie było max? Na której pozycji stało? Jaka liczba stoi na
# tej pozycji w nowym wektorze?
def normalizeUsingFormula(randomValues, minValue, maxValue):
    normalizeFn = lambda value: (value - minValue)/(maxValue - minValue)
    return list(map(normalizeFn, randomValues))


def solve():
    randomValues = getRandomValuesOfFixedLength()
    averageOfRandomValues = getAverage(randomValues)
    minRandom = min(randomValues)
    maxRandom = max(randomValues)
    normalized = normalizeUsingFormula(randomValues, minRandom, maxRandom)
    indexOfMax = randomValues.index(maxRandom)
    normalizedValueOfMaxIndex = normalized[indexOfMax]

    print(randomValues)
    print(averageOfRandomValues)
    print(minRandom)
    print(maxRandom)
    print(statistics.stdev(randomValues))
    print(normalized)
    print(indexOfMax)
    print(normalizedValueOfMaxIndex)

# [23, 40, 96, 56, 30, 50, 18, 40, 34, 35, 48, 11, 16, 88, 22, 4, 45, 25, 9, 43, 55, 3, 47, 10, 39, 69, 34, 83, 87, 74, 60, 59, 76, 85, 65, 26, 64, 31, 55, 33, 5, 14, 76, 83, 57, 83, 17, 43, 14, 96]
# 45.52
# 3
# 96
# 26.927900711616825
# [0.21505376344086022, 0.3978494623655914, 1.0, 0.5698924731182796, 0.2903225806451613, 0.5053763440860215, 0.16129032258064516, 0.3978494623655914, 0.3333333333333333, 0.34408602150537637, 0.4838709677419355, 0.08602150537634409, 0.13978494623655913, 0.9139784946236559, 0.20430107526881722, 0.010752688172043012, 0.45161290322580644, 0.23655913978494625, 0.06451612903225806, 0.43010752688172044, 0.5591397849462365, 0.0, 0.4731182795698925, 0.07526881720430108, 0.3870967741935484, 0.7096774193548387, 0.3333333333333333, 0.8602150537634409, 0.9032258064516129, 0.7634408602150538, 0.6129032258064516, 0.6021505376344086, 0.7849462365591398, 0.8817204301075269, 0.6666666666666666, 0.24731182795698925, 0.6559139784946236, 0.3010752688172043, 0.5591397849462365, 0.3225806451612903, 0.021505376344086023, 0.11827956989247312, 0.7849462365591398, 0.8602150537634409, 0.5806451612903226, 0.8602150537634409, 0.15053763440860216, 0.43010752688172044, 0.11827956989247312, 1.0]
# 2
# 1.0
solve()

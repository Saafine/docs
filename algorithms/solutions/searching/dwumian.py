# 04AK - 37:00
def G(n, k, e):
    if n >= k or k == 0:
        drzewo.append([n, k, e])
    if n - 1 == k or k == 0:
        zliczanie_wynikow.append(1)


def GPrim(n, k, e):
    if n != k:
        drzewo.append([n, k, e])
    if n == k or k == 0:
        zliczanie_wynikow.append(1)


def DwumianNewtona(n, k):
    if k == 0 or k == n:
        return 1
    else:
        return float(n) / k * DwumianNewtona(n - 1, k - 1)


def Uruchom():
    i = 0
    ilosc_podzbiorow = DwumianNewtona(init_n, init_k)
    while sum(zliczanie_wynikow) != ilosc_podzbiorow:
        n = drzewo[i][0]
        k = drzewo[i][1]
        e = drzewo[i][2]
        if n >= k and k > 0:
            G(n - 1, k, e)
            if e == 0:
                GPrim(n - 1, k - 1, [n])
            else:
                GPrim(n - 1, k - 1, [n] + e)
        i += 1


zliczanie_wynikow = []
drzewo = []
init_n = 4
init_k = 2
init_e = 0
drzewo.append([init_n, init_k, init_e])

Uruchom()
print(drzewo)
print(zliczanie_wynikow)

// wyznaczamy min wartosc (funkcja pomocnicza lub metodą drzewa)
min = min(A[1...n])

// tworzymy tablice pomocniczą z minimalnymi wartościami
roz_inf(min, B[1..n])

// zastepujemy wszystkie wartosci poza minimalną
for 1 <= i <= n pardo
    if A[i] != B[i]:
        A[i] = 0

// sumujemy
for 1 <= h <= logn do
    for 1 <= i <= n/(2^h) pardo
        A[i]= A[2i] + A[2i-1]

// zwracamy wynik
if i = 1 then
    c = A[i]

roz_inf(M, min_container[1...n])

for 1 <= i <= n pardo:
    if A[i] < min_container[i]
        A[i] = infinity

for 1 <= h <= logn do
    for 1 <= i <= n/(2^h) pardo
        A[i] = min(A[2i - 1], A[2i])

if i = 1 then
    C = A[1]

Czy algorytm jest optymalny?
Każdy równoległy algorytm nie może być szybszy, niż optymalny algorytm sekwencyjny.
Żeby algorytm sekwencyjny stwierdził, co jest największego w danej tablicy to musi przynajmniej przeczytać wszystkie elementy.

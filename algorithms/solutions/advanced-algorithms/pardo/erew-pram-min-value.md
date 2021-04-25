Znajdz maksymalna wartosc w tablicy w modelu EREW PRAM

for 1 <= h <= logn do
    for 1 <= i <= n/(2^h) pardo
        A[i]= max(A[2i], A[2i-1])
if i = 1 then
    c = A[i]


T(n) = O(logn)
W(n) = O(n)
P(n) = n

Optymalny

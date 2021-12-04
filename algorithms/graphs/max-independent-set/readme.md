# Readme
Najwiekszy mozliwy zbior w ktorym dwa dowolne wierzcholki nie sasiaduja ze soba, np.

O(n) za 5 pkt

Wejscie graf (drzewo)
Wyjscie liczba



W grafie zbior niezalezny to podzbior wierzchołków, wierzchołki spełniają
taki warunek ze dla dowolnych 2 wierzchołków w zbiorze nie istnieje krawedz miedzy nimi

The Maximum Independent Set (MIS)

```
You can compute the maximum independent set by a depth first search through the tree.

The search will compute two values for each subtree in the graph:

A(i) = The size of the maximum independent set in the subtree rooted at i with the constraint that node i must be included in the set.
B(i) = The size of the maximum independent set in the subtree rooted at i with the restriction that node i must NOT be included in the set.
These can be computed recursively by considering two cases:

The root of the subtree is not included.

B(i) = sum(max(A(j),B(j)) for j in children(i))

The root of the subtree is included.

A(i) = 1 + sum(B(j) for j in children(i))

The size of the maximum independent set in the whole tree is max(A(root),B(root)).
```

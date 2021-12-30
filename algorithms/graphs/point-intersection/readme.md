# Punkty przecięć
Wejście: H - punkty poziome, V - punkty pionowe
Wyjście: Punkty przecięć

Sortowanie:
lewy koniec odcinka poziomego (z = 1)
odcinek pionowy (z = 2)
prawy koniec odcinka poziomego (z = 3)

Sortowanie pozwala uniknąć problemu, gdzie końce odcinków poziomych mogą mieć taką samą
współrzędną x jak odcinki pionowe

# Implementation based on:
https://cw.fel.cvut.cz/b181/_media/courses/cg/lectures/03-rangesearch.pdf
http://www.facweb.iitkgp.ac.in/~sourav/Lecture-17.pdf
https://github.com/Shalin23/Range-Tree/blob/main/RangeTree.py
http://people.scs.carleton.ca/~michiel/lecturenotes/ALGGEOM/horverintersect.pdf
http://www-di.inf.puc-rio.br/~laber/range_kd_trees.pdf
https://github.com/pavle10/faculty_projects/blob/e6d9063538608bfd824013b3085ef85fb767b799/les/src/les/RangeTree.java

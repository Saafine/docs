Jądro wielokąta prostego to taki obszar, że z dowolnego punktu w jądrze będziemy  
mogli dostać się do dowolnego punktu wielokąta za pomocą prostej monotonicznej  

Jeżeli największe maksimum jest większe od najniższego minimum, to jądro nie będzie istnieć
Jeśli będą istniały minima i maksima lokalne, to dolna i górna krawędź jądra będą poziome.
Jeśli nie będą istniały, to jądro będzie całością i to może być dowolny kształt.
Na brzegach jądra mogą być dzikie rzeczy.

![img.png](images/img.png)

Wejście: zbiór wierzchołków, kierunek przeciwny do wskazówek zegara, współrzędne liczby całkowite
Wyjście: jądro (4 pkt), obwód jądra (1pkt)
Złożoność liniowa - O(n)

# TODO
- walidacja, czy w wielokąt jest prawidłowy?
- czy istnieje jądro?
      - jeśli tak, to jaki obwód?
- jak wyznaczyć minimum lokalne?


![img_1.png](images/img_1.png)



![img_2.png](images/img_2.png)



![img_3.png](images/img_3.png)
![img_4.png](images/img_4.png)
![img_5.png](images/img_5.png)
![img_7.png](images/img_7.png)
![img_8.png](images/img_8.png) // brak maksimum lokalnego, ma tylko minima?


# Algorytym
- przechodzimy wielokąt po kolei
- szukamy, które wierzchołki to są minima i maksima - one wyznaczają nam górną i dolną granicę jądra
- jeśli góra będzie większa od dołu, to będziemy mieli jądro
- obwód (38.25)

# Algorytm
- może się zdarzyć, że jądra nie będzie
- min lokalne - niższy, lub równy swoim sąsiadom przy odpowiednim skręcie
1) znaleźć minimum punktu w wielokącie  y_min
2) znaleźć minimum punktu w wielokącie y_max
![img_11.png](images/img_11.png)
3) wyznacz min lokalne i znajdz najmniejsze z nich, i porównaj lokalne z y_min (wybieramy mniejsze)
(jezeli jest wiecej, niz 1 to bedzie trzeba o tym pamietac przy liczeniu obwodu)
- znajdz taką trójkę wierzchołków, gdzie środkowy punkt ma mniejszą lub równą współrzędną y
i dodatkowo szukamy skrętów w prawo (55:48)
![img_9.png](images/img_9.png)
![img_13.png](images/img_13.png)
4) wyznacz max lokalne i znajdz najwieksze z nich i porównaj z y_max (wybieramy wieksze)
![img_12.png](images/img_12.png)
![img_10.png](images/img_10.png)

5) wyznaczamy na najniższym minimum granicę naszego jądra
![img_17.png](images/img_17.png)
y_min > y_max jest jądro  
y_min < y_max nie ma jądra
jeśli jakiekolwiek min lokalne istnieje, to na pewno będzie mniejsze niż y max 
(ale inaczej jak nie ma lokalnych minimow)


 

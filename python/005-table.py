import numpy as np
import matplotlib.pyplot as plt

def mapListValuesToInt(arr):
    for i in range(0, len(arr)):
        arr[i] = int(arr[i])
    return arr

def getTable():
    table = []
    fileData = np.loadtxt('miasta.csv', delimiter=',', dtype=str)
    for index, row in enumerate(fileData):
        values = list(row)
        if index > 0:
            values = mapListValuesToInt(values)

        table.append(values)
    return table


loadedTable = getTable()

print(loadedTable)
# [['Rok' 'Gdansk' 'Poznan' 'Szczecin']
#  ['1900' '170' '110' '210']
#  ['1925' '210' '220' '254']
#  ['1939' '250' '274' '287']
#  ['1946' '117' '267' '72']
#  ['1950' '194' '320' '178']
#  ['1960' '286' '408' '269']
#  ['1970' '365' '471' '338']
#  ['1980' '456' '552' '388']
#  ['1990' '465' '590' '413']
#  ['2000' '462' '574' '416']]


loadedTable.append([2010, 460, 555, 405])
print(loadedTable)

# [['Rok', 'Gdansk', 'Poznan', 'Szczecin'],
# ['1900', '170', '110', '210'],
# ['1925', '210', '220', '254'],
# ['1939', '250', '274', '287'],
# ['1946', '117', '267', '72'],
# ['1950', '194', '320', '178'],
# ['1960', '286', '408', '269'],
# ['1970', '365', '471', '338'],
# ['1980', '456', '552', '388'],
# ['1990', '465', '590', '413'],
# ['2000', '462', '574', '416'],
# [2010, 460, 555, 405]]


def getDataAtIndex(table, index):
    data = []
    for row in table:
        data.append(row[index])
    return data


years = getDataAtIndex(loadedTable, 0)[1:]
populationOfGdansk = getDataAtIndex(loadedTable, 1)[1:]
populationOfPoznan = getDataAtIndex(loadedTable, 2)[1:]
populationOfSzczecin = getDataAtIndex(loadedTable, 3)[1:]

plt.title('Ludnosc w miastach Polski')
plt.xticks(years)
plt.yticks([150, 200, 250, 300, 350, 400, 450])
plt.plot(years, populationOfGdansk, marker='o', color='red')
plt.plot(years, populationOfPoznan, marker='o', color='green')
plt.plot(years, populationOfSzczecin, marker='o', color='blue')
plt.legend(['Gdańsk', 'Poznań', 'Szczecin'])
plt.ylabel('Liczba ludności [w tys.]')
plt.xlabel('Lata')
plt.gcf().set_size_inches(15, 7)
plt.show()



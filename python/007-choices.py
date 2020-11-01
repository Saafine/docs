import random

mylist = ["apple", "banana", "cherry"]

# Return a list with 14 items (k)
# The list should contain a randomly selection of the values from a specified list,
# and there should be 10 times higher possibility to select "apple" than the other two:

print(random.choices(mylist, weights = [10, 1, 1], k = 14))

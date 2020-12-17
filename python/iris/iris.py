import pandas as pd
import numpy as np

# Read csv file into a pandas dataframe
# df = pd.read_csv("iris.csv")
missing_values = ["n/a", "na", "--", "-", "NA"]
df = pd.read_csv("iris_with_errors.csv", na_values=missing_values)

headers = ["sepal.length", "sepal.width", "petal.length", "petal.width", "variety"]

total_values_missing = 0

for header in headers:
    missing_values_sum = df[header].isnull().sum()
    total_values_missing += missing_values_sum

print(total_values_missing)

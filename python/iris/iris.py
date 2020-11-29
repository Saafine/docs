import pandas as pd
import numpy as np

# Read csv file into a pandas dataframe
# df = pd.read_csv("iris.csv")
df = pd.read_csv("iris_with_errors.csv")

print(df['petal.length'].isnull())

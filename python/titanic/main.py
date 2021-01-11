import pandas as pd
import numpy as np
# from mlxtend.frequent_patterns import apriori, association_rules
import matplotlib.pyplot as plt

## Use this to read data from the csv file on local system.
df = pd.read_csv('./titanic.csv', sep=',')
## Print top 5 rows
df.head(5)

# print(items)
itemset = set(df)
encoded_vals = []
for index, row in df.iterrows():
    rowset = set(row)
    labels = {}
    uncommons = list(itemset - rowset)
    commons = list(itemset.intersection(rowset))
    for uc in uncommons:
        labels[uc] = 0
    for com in commons:
        labels[com] = 1
    encoded_vals.append(labels)
ohe_df = pd.DataFrame(encoded_vals)

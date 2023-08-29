import pandas

def calculate_Revenue(csv_frame):
    try:
        total_revenue = csv_frame.groupby("product").sum("revenue")
        return total_revenue
    except Exception as e:
        return e

csvFile = pandas.read_csv("data.csv")
csvFile.groupby("product").sum("revenue")
print(calculate_Revenue(csvFile))

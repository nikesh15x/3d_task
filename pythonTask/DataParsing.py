import pandas

def parse_csv(csv_content):
    data = list(csv_content.strip().split("\n"))
    col_names = data[0].split(",")
    csv_list = []
    for i in range(1, len(data)):
        dicts = {}
        rows = data[i].split(",")
        for i, col in enumerate(col_names):
            dicts[col] = rows[i]
        csv_list.append(dicts)
    return csv_list

csvFile = pandas.read_csv("data.csv")
csvString = csvFile.to_csv(index=False)

print(parse_csv(csvString))


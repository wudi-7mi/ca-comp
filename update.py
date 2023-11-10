import csv
import json
import pprint

with open('202311102002.csv', encoding='utf-8') as f:
    reader = csv.reader(f)
    data = list(reader)

result = [] 
for row in data:
    team = {
        "name": row[1],
        "score": row[2],
        "rank": row[0],
    }
    result.append(team)

print(json.dumps(result, indent=2, ensure_ascii=False, separators=(',', ':')))
pprint.pprint(result)
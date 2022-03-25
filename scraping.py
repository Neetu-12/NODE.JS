import json
import requests
# bs4 is package ,In bs4 me se Beautifulsoup ko Import krvate h.
from bs4 import BeautifulSoup
a=requests.get("https://www.theguardian.com/film/2019/sep/13/100-best-films-movies-of-the-21st-century")
b=BeautifulSoup(a.text,"html.parser")#yha pr baeutifulsoup xml and hmtl ko parse krke deta h.
c=b.find_all("h2")
d=[]

for i in c:
    n=i.text
    d.append(n)
r=[]
# dic={}

for j in range(len(d)-1):
    dic={}

    if j%2==0:
        dic["Rank"]=d[j]
    else:
        dic["name"]=d[j]
        # dic["Rank"]=d[j]
        print(dic)
    if {} in r:
        r.remove({})
    r.append(dic)
with open("scraping.json","+w") as f:
    json.dump(r,f,indent=4)

    
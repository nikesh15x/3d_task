# https://www.audi.in/in/web/en.htm
from bs4 import BeautifulSoup
import requests

def get_links(url):
    try:
        if not isinstance(url, str):
            raise TypeError("url must be a string")
        fetch_data = requests.get(url)
        get_Soup = BeautifulSoup(fetch_data.content, "html.parser")
        content = get_Soup.find_all("a")
        fetchLinks = [link.get("href") for link in content if link.get("href") != "#"]
        return fetchLinks
    except Exception as e:
        print("Error ->:", e)


print(get_links("https://www.audi.in/in/web/en.html"))

import requests
from bs4 import BeautifulSoup


def get_weather(city):
    try:
        if not isinstance(city, str):
            raise TypeError("city must be a string")
        api = (
            "https://api.openweathermap.org/data/2.5/forecast/daily?q="
            + city
            + "&appid=bd5e378503939ddaee76f12ad7a97608"
        )
        
        fetch_data = requests.get(api)
        weather_data = BeautifulSoup(fetch_data.content, "html.parser")
        return weather_data
    except Exception as e:
        print("Error ->:", e)


print(get_weather("Ponda"))


# some public api key Reference 
# https://gist.github.com/lalithabacies/c8f973dc6754384d6cade282b64a8cb1
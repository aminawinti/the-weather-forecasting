import requests

def test_weather_api():

    response = requests.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Brasilia&appid=f33f3a82f1e3f02b5b9d717c19211a28"
    )

    assert response.status_code == 200

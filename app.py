from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = 'f33f3a82f1e3f02b5b9d717c19211a28'

@app.route("/", methods=["GET", "POST"])
def index():

    weather = None

    if request.method == "POST":

        city = request.form["city"]

        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric&lang=pt_br"

        response = requests.get(url)

        data = response.json()

        if response.status_code == 200:

            weather = {
                "city": city,
                "temperature": data["main"]["temp"],
                "description": data["weather"][0]["description"],
                "humidity": data["main"]["humidity"]
            }

    return render_template("index.html", weather=weather)

if __name__ == "__main__":
    app.run(debug=True)

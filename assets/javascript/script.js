var inputValue = document.querySelector("#search-box");
var search = document.querySelector("#search");
var cityName = document.querySelector("#name");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humid = document.querySelector(".humid");
var icon = document.querySelector(".icon");

function citySearch () {
    
}
search.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=8fcfa15744ca25f903914bd30c91b962&units=imperial")
        .then(resp => {
            if (!resp.ok) alert("Invalid city name.");
            return resp.json();
        })
        .then(data => {
            var cityNameValue = data["city"]["name"];
            var tempValue = data["list"][0]["main"]["temp"];
            var windValue = data["list"][0]["wind"]["speed"];
            var humidValue = data["list"][0]["main"]["humidity"];
            var iconValue = data["list"][0]["weather"][0]["icon"];


            cityName.innerHTML = cityNameValue;
            temp.innerHTML = "Temperature: " + tempValue + "°F";
            wind.innerHTML = "Wind Speed: " + windValue + "mph";
            humid.innerHTML = "Humidity: " + humidValue + "%";
            icon.innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconValue + '@2x.png">';

            console.log(data);
        })
        .catch(console.err);
})


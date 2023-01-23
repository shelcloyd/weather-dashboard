// var inputValue = document.querySelector("#search-box");
// var search = document.querySelector("#search");
// var cityName = document.querySelector("#name");
// var temp = document.querySelector(".temp");
// var wind = document.querySelector(".wind");
// var humid = document.querySelector(".humid");
// var icon = document.querySelector(".icon");
// var forecastDate = document.querySelector(".date");

// search.addEventListener("click", function () {
//     fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=8fcfa15744ca25f903914bd30c91b962&units=imperial")
//         .then(resp => {
//             if (!resp.ok) alert("Invalid city name.");
//             return resp.json();
//         })
//         .then(data => {
//             var cityNameValue = data["city"]["name"];
//             var tempValue = data["list"][0]["main"]["temp"];
//             var windValue = data["list"][0]["wind"]["speed"];
//             var humidValue = data["list"][0]["main"]["humidity"];
//             var iconValue = data["list"][0]["weather"][0]["icon"];


//             cityName.innerHTML = cityNameValue;
//             temp.innerHTML = "Temperature: " + tempValue + "°F";
//             wind.innerHTML = "Wind Speed: " + windValue + "mph";
//             humid.innerHTML = "Humidity: " + humidValue + "%";
//             icon.innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconValue + '@2x.png">';

//             console.log(data);
//         })
//         .catch(console.err);
// });

const btn = document.querySelector('.btn');
const input = document.querySelector('#search');
const cityName = document.querySelector('#name');
const apiKey = '8fcfa15744ca25f903914bd30c91b962';

btn.addEventListener('click', function () {
    cityName.innerHTML = input.value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + apiKey + '&units=imperial')
        .then(response => response.json())
        .then(data => console.log(data))
        .then(data => {
            const day = document.querySelector('.day');
            const icon = document.querySelector('.icon');
            const temp = document.querySelector('.temp');
            const wind = document.querySelector('.wind');
            const humidity = document.querySelector('.humidity');
            for (i = 0; i < 5; i++) {
                let dayValue = data['list'][i]['dt'];
                let tempValue = data["list"][i]["main"]["temp"];
                let windValue = data["list"][i]["wind"]["speed"];
                let humidityValue = data["list"][i]["main"]["humidity"];
                let iconValue = data["list"][i]["weather"]["icon"];

                day.innerHTML = dayValue;
                temp.innerHTML = "Temperature: " + tempValue + "°F";
                wind.innerHTML = "Wind Speed: " + windValue + "mph";
                humidity.innerHTML = "Humidity: " + humidityValue + "%";
                icon.innerHTML = '<img src="http://openweathermap.org/img/wn/' + iconValue + '@2x.png">';
            }
        })
        .catch(err => alert('No data found.'))
});

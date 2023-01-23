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
     
        .then(function (response) {
            return response.json();
        }
        )
        .then(function (data) {
            console.log(data);

            const container = document.querySelector('#container');

            container.querySelector('.icon').innerHTML = '<img src="http://openweathermap.org/img/wn/' + data["list"][0]["weather"][0]["icon"] + '@2x.png">';
            container.querySelector('.temp').innerHTML = 'Temperature: ' + data["list"][0]["main"]["temp"];
            container.querySelector('.wind').innerHTML = 'Wind Speed: ' + data["list"][0]["wind"]["speed"];
            container.querySelector('.humidity').innerHTML = 'Humidity: ' + data["list"][0]["main"]["humidity"];

            let days = data.list.filter(day => {
                return day.dt_txt.includes('12:00:00')
              })

              console.log(days);

            for (let i = 0; i <=4; i++){
                const card = document.querySelector('.card' + i);

                card.querySelector('.day').innerHTML = days[i].dt_txt;
                card.querySelector('.icon').innerHTML = '<img src="http://openweathermap.org/img/wn/' + days[i].weather[0].icon + '@2x.png">';
                card.querySelector('.temp').innerHTML = 'Temperature: ' + days[i].main.temp + '°F';
                card.querySelector('.wind').innerHTML = 'Wind Speed: ' + days[i].wind.speed + 'mph';
                card.querySelector('.humidity').innerHTML = 'Humidity: ' + days[i].main.humidity + '%';            
            }
        }
        )
        .catch(function (err) {
            console.log(err);
        }
        )
})
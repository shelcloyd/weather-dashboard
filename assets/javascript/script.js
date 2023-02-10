const btn = document.querySelector('.btn');
const input = document.querySelector('#search');
let cityName = document.querySelector('#name');
const current = document.querySelector('.current');
const apiKey = '8fcfa15744ca25f903914bd30c91b962';

function reSearch(search) {

cityName.innerHTML = search;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + search + '&appid=' + apiKey + '&units=imperial')
     
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
}

btn.addEventListener('click', function () {
    cityName.innerHTML = input.value;
    current.innerHTML = 'Current Weather Conditions';

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + apiKey + '&units=imperial')
     
        .then(function (response) {
            return response.json();
        }
        )
        .then(function (data) {
            console.log(data);

            localStorage.setItem('search', JSON.stringify(data));

            let searchHistory = input.value;

                let ul = document.querySelector('#search-history');
                let button = document.createElement('button');
                button.appendChild(document.createTextNode(searchHistory));
                button.setAttribute('id', input.value);
                button.onclick = function () {
                    console.log(button.id);
                    reSearch(button.id)
                };
                ul.appendChild(button);

            

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
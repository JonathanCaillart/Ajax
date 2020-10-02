function handleSubmit(event){
    event.preventDefault();

    var key = '50f94ed6f36cb386e192091d30d0efeb';
    var city = event.target.city.value;
    var xhr = new XMLHttpRequest(); 

    xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + city +  '&appid=' + key);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var reponse = JSON.parse(xhr.responseText);
            displayWeather(reponse);
        }
    };
    xhr.send();
}

function displayWeather(data){
    var name = document.createElement('h1');
    name.innerText = data.name;

    var wind = document.createElement('p');
    wind.innerText='speed : ' + data.wind.speed; 

    var country = document.createElement('p');
    country.innerText = 'country: ' + data.sys.country;

    var humidity = document.createElement('p');
    humidity.innerText = 'humidity :' + data.main.humidity;

    var statut = document.createElement('p');
    statut.innerText = 'statut :' + data.weather[0].description;

    var container = document.getElementById('weather');
    container.innerHTML = '';
    container.appendChild(name);
    container.appendChild(wind);
    container.appendChild(country);
    container.appendChild(humidity);
    container.appendChild(statut);

}

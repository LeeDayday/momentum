const API_KEY = "399c45653135538e57f9014b12f780d8";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in ",lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()). then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function  onGeoError(params) {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

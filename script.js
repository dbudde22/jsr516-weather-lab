const apiKey = 'f8e906a783c94eecbaa11012232806';
const input = document.querySelector('.inputForm');
const inputBar = document.querySelector('#inputBar');

let cityName = document.querySelector("#cityName");
let temp = document.querySelector("#temp");
let condishIcon = document.querySelector("#condishIcon");
let condish = document.querySelector("#condish");
let body = document.querySelector("body");

input.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputVal = inputBar.value;
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputVal}&aqi=no`);
    console.log(response);
    cityName.innerText = `${response.data.location.name}, ${response.data.location.region}, ${response.data.location.country}`;
    temp.innerText = `The current temperature is ${response.data.current.temp_f}ºF`;
    condishIcon.innerHTML = `<img src=".${response.data.current.condition.icon.slice(20)}" />`;
    condish.innerText = response.data.current.condition.text;
    if (response.data.current.is_day == 0) {
        body.classList.add('night');
    } else {
        body.classList.remove('night');
    }
})

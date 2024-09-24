
const inputBox = document.querySelector('.input-box');
const inputBtn = document.querySelector('.inputBtn');
const weatherBox = document.querySelector('.weather-box');
const temperature = document.querySelector('.tempreture');
const description = document.querySelector('.description');
const humidity = document.querySelector('.Humidity');
const windSpeed = document.querySelector('.wind-speed');
const notFound = document.querySelector('.not-found');
const weatherBody = document.querySelector('.weather-body');
const body = document.body;

inputBtn.addEventListener('click', () => {
  const city = inputBox.value;
  if (city) {
    getWeather(city);
  }
});

inputBox.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
  const city = inputBox.value;
  if (city) {
    getWeather(city);
  }
}
});



const apiKey = "a80a3e5dedc0854d15ff497c0c98b874"; 
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    console.log(data);

    if (data.cod === '404') {
      notFound.style.display = 'block';
      weatherBody.style.display = 'none';
    } else {
      notFound.style.display = 'none';
      weatherBody.style.display = 'block';
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed} km/h`;
    }

    const weatherCondition = data.weather[0].main.toLowerCase();

if(weatherCondition.includes("clear")){
  body.style.backgroundImage = "url('https://i.pinimg.com/236x/dc/f2/a2/dcf2a25a0a324aa34b1f9739ef5104ad.jpg')";
}else if(weatherCondition.includes("clouds")){
  body.style.backgroundImage = "url('https://i.pinimg.com/236x/2c/58/69/2c58698a46b218700ddcc27f09357447.jpg')";
}else if(weatherCondition.includes("rain")){
  body.style.backgroundImage = "url('https://i.pinimg.com/564x/59/a4/ea/59a4ea1df324f5307429c76e79bbca29.jpg')";
}else if(weatherCondition.includes("snow")){
  body.style.backgroundImage = "url('https://i.pinimg.com/564x/10/90/ed/1090ed683bef77260588840e4b08877f.jpg')";
}else if(weatherCondition.includes("thunderstorm")){
  body.style.backgroundImage = "url('https://i.pinimg.com/236x/5a/84/1b/5a841b5b321ddcae329624e24f6c47e0.jpg')";
}else{
    body.style.backgroundImage = "url('https://i.pinimg.com/564x/71/ac/96/71ac960ce1564cd95fccaccacd55a790.jpg')";
}

  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}


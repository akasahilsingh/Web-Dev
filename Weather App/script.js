const getWeatherBtn= document.getElementById("get-weather-btn");
const select = document.querySelector("select");
const weatherContainer= document.getElementById("weather-container");

const getWeather = async (city) => {
   if(!city) {
   return;
 }

  try {


 const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
 const data = await response.json();

 
  if (city === "Paris") {
      alert("Something went wrong, please try again later");
      return null;
    }
 
 if(data.error) {
   alert("Something went wrong, please try again later");
   return null;
 }
 return data;
 
  }
  catch (err){
    console.error("Your error for api: ", err);
    return null;
  }
}

const showWeather = async (city) => {
   const data = await getWeather(city);
    
    if(!data) {
      weatherContainer.innerHTML = `<p>No Weather Data Available</p>`
      return;
    }

    const icon = data.weather[0]?.icon ?? "N/A";
    const temp = data.main?.temp ?? "N/A";
    const feelsLike = data.main?.feels_like ?? "N/A";
    const humidity = data.main?.humidity ?? "N/A";
    const windSpeed = data.wind?.speed ?? "N/A";
    const windGust = data.wind?.gust ?? "N/A";
    const weatherMain = data.weather?.[0]?.main ?? "N/A";
    const name = data.name ?? "N/A";
     weatherContainer.innerHTML = `
     <img id="weather-icon" src="${icon}" />
     <p id="main-temperature">${temp}</p>
     <p id="feels-like">${feelsLike}</p>
     <p id="humidity">${humidity}</p>
     <p id="wind">${windSpeed}</p>
     <p id="wind-gust">${windGust}</p>
     <p id="weather-main">${weatherMain}</p>
     <p id="location">${name}</p>
     `
}







getWeatherBtn.addEventListener("click", async ()=> {
  const city = select.value;
 await showWeather(city);
})

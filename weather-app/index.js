function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    const apiKey = "0c73f550b11c98ccc98f6899e85429af";
    if (searchInput == "") {
        weatherDataSection.innerHTML = `
        <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return;
      }
      async function getLonAndLat() {
  const countryCode = 1
  const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`
}
 
  }
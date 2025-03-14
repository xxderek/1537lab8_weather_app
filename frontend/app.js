const form = document.querySelector("form");
const weatherDiv = document.getElementById("weatherDiv");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = form.elements.city.value;
  try {
    const response = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await response.json();
    weatherDiv.innerHTML = `
      <p>Temperature: ${data.temperature}°C</p>
      <p>Description: ${data.description}</p>
      <img src="http://openweathermap.org/img/w/${data.icon}.png" alt="Weather Icon"/>
    `;
  } catch (error) {
    weatherDiv.textContent = "An error occurred while fetching weather data.";
  }
});

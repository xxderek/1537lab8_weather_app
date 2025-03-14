const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; 
const API_KEY = 'c1caac5fde071d3b63a4429d74e31447'; 

app.use(cors());

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const weatherData = {
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };
    res.json(weatherData);
  } catch (error) {
    console.error('API error:', error.response.data);
    res.status(500).json({ error: "An error occurred fetching the weather data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


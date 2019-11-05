'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/lab06-back', (request, response) =>{
  response.send('data from the /lab06-back route');
});


app.get('/location', (request, response) =>{
  const geoData = require('./data/geo.json');
  const city = request.query.data;
  const locationData = new Location(city, geoData);
  response.send(locationData);
});

function Location(city, geoData){
  this.search_query = city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude = geoData.results[0].geometry.location.lng;
}

app.get('/weather', (request, response) =>{
  const weatherData = require('./data/darksky.json');
  const weather = request.query.data;
  const newWeatherData = new Weather (weather, weatherData);
  response.send(newWeatherData);
});

function Weather (weather, weatherData){
  this.search_query = weather;
  this.formatted_query = weatherData.results[0].daily;
  this.forecast = weatherData.results[0].data.summary;
  this.time = weatherData.results[0].data.time;
}

app.listen(PORT, () =>{
  console.log(`listening on PORT ${PORT}`);
});


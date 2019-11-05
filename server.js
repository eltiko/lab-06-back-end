'use strict';

require('dotenv').config();
const express = require('express');
// eslint-disable-next-line no-unused-vars
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
  const weather = require('./data/darksky.json');
  const weatherData = [];
  for (let i=0; i<weather.daily.data.length; i++){
    let temp = new Forecast(data[i].summary, data[i].time)
    weatherData.push(temp);
  }
  response.send(weatherData);
});

function Forecast (weather){
  this.weather = weather;
  // this.formatted_query = weatherData.data[0].daily;
  // this.forecast = weatherData.data[0].summary;
  // this.time = weatherData.data[0].time;
}

app.listen(PORT, () =>{
  console.log(`listening on PORT ${PORT}`);
});


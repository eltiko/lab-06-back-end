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
  for (let i = 0; i < weather.daily.data.length; i++){
    let forecast = weather.daily.data[i];
    // var myDate = new Date( 1540057361 * 1000);
    // document.write(myDate.toGMTString() + myDate.toLocaleString());
    let temp = new Date((time) * 1000);
    let tempString = temp.toUTCString();
    weatherData.push(new Weather(forecast.summary,forecast.time));

  }
  response.send(weatherData);
});

function Weather (weather, time){
  this.weather = weather;
  this.time = time; 
  // this.formatted_query = weatherData.data[0].daily;
  // this.forecast = weatherData.data[0].summary;
  // this.time = weatherData.data[0].time;
}

app.listen(PORT, () =>{
  console.log(`listening on PORT ${PORT}`);
});


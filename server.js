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
<<<<<<< HEAD
  for (let i=0; i<weather.daily.data.length; i++){
    let forecast = weather.daily.data[i]
    // let epochTime = (dailyData.time*1000);
    // let d = new Date(epochTime);
    // let time = d.toUTCString();
=======
  for (let i = 0; i < weather.daily.data.length; i++){
    let forecast = weather.daily.data[i];
    // var myDate = new Date( 1540057361 * 1000);
    // document.write(myDate.toGMTString() + myDate.toLocaleString());
>>>>>>> 36de042f83ae7d6aa2425943f3cdb2302af456c0
    weatherData.push(new Weather(forecast.summary,forecast.time));
    
}
response.send(weatherData);
});

function Weather (weather, time){
<<<<<<< HEAD
  let temp = new Date((time) * 1000);
  let tempString = temp.toUTCString();
  this.weather = weather;
<<<<<<< HEAD
  this.time = time;
=======
  this.time = time; 
>>>>>>> 36de042f83ae7d6aa2425943f3cdb2302af456c0
  // this.formatted_query = weatherData.data[0].daily;
  // this.forecast = weatherData.data[0].summary;
  // this.time = weatherData.data[0].time;
=======
    this.weather = weather;
  this.time = time; 
    let temp = new Date((time) * 1000);
    let tempString = temp.toUTCString();
    // this.formatted_query = weatherData.data[0].daily;
    // this.forecast = weatherData.data[0].summary;
    // this.time = weatherData.data[0].time;
>>>>>>> e78a1ddb04229a50b43cbe987139767e10d0b1ea
}

app.listen(PORT, () =>{
    console.log(`listening on PORT ${PORT}`);
});


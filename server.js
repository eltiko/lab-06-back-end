'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/lab06-back', (request, response) =>{
  response.send('data trom the /lab06-back route');
});

app.listen(PORT, () =>{
  console.log(`listening on PORT ${PORT}`);
});

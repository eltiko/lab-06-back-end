'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  Console.log(`listening on PORT ${PORT}`);
});

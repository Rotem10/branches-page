const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const res = async () => {
  try {
    return await axios.get(
      'https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json'
    );
  } catch (error) {
    throw error;
  }
};

app.get('/', (request, response) => {
  response.send(res.data);
});

app.listen(9000, () => {
  console.log('Listen on the port 9000...');
});

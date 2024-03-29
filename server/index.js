const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (request, response) => {
  let data;
  axios
    .get(
      'https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json'
    )
    .then((getResponse) => {
      data = getResponse.data;
      response.send(data);
    })
    .catch(function (error) {
      console.log('Error while fetching branches data', error);
    });
});

app.listen(9000, () => {
  console.log('Listen on the port 9000...');
});

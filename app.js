const express = require('express');

//Routers
const { registrationsRouter } = require('./routes/registrations.routes');


//Utils
const { db } = require('./utils/database.util')


//Init app
const app = express();

//Accept incoming json data
app.use(express.json());

//Endpoints
app.use('/api/v1/registrations', registrationsRouter)

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log((err)));

db.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log((err)));;

app.listen(4000, () => {
  console.log('Checking app runing on port 4000!!');
});
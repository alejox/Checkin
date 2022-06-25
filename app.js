const express = require('express');

//Routers
const {registrationsRouter} = require('./routes/registrations.routes');


//Utils
const {db} =require('./utils/database.util')


//Init app
const app = express();

//Endpoints
app.use('/api/v1/registrations', registrationsRouter)

db.authenticate().then(() => console.log('Database authenticated'))
.catch((err) => console.log((err)))

app.listen(4000, () =>{
  console.log('Checking app runing on port 4000!!');
});
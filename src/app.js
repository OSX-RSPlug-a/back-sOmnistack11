const express = require('express');
const cors = require('cors');
const http = require('http');
const helmet = require('helmet');
const { errors } = require('celebrate')


const routes = require('./routes/routes');


const app = express();
http.Server(app);


app.use(cors())
app.use(express.json())
app.use(routes)
app.use(helmet())
app.use(helmet.xssFilter())
app.use(helmet.frameguard())
app.use(errors())

app.use(helmet({
  frameguard: {
    action: 'deny'
  }
}))


app.use((req, res, next) => {
  next(console.error(404));
});


module.exports = app
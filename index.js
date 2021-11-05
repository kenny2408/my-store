const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

//const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://myapp.co'];
const option = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
})

routerApi(app);

/* app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler); */

app.listen(port, () => {
  console.log('Mi port' + port);
});

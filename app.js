const express = require('express');
require('dotenv').config();

const userRouter = require('./router/user.router');
const configs = require('./config/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.json('WELOCME')
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Unknown error',
    status: err.status || 500
  });
});

app.listen(configs.PORT, () => {
  console.log(`Server listen ${configs.PORT}`);
});

const express = require('express');
const { fileServices } = require('./services');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req, res) => {
  const users = await fileServices.reader();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const userInfo = req.body;

  if (userInfo.name.length < 3 || typeof userInfo.name !== 'string') {
    return res.status(400).json('Wrong name');
  }

  if (userInfo.age < 0 || Number.isNaN(+userInfo.age)) {
    return res.status(400).json('Wrong age');
  }

  const users = await fileServices.reader();

  const newUser = {
    name: userInfo.name,
    age: userInfo.age,
    id: users[users.length -1].id + 1
  };
  users.push(newUser);

  await fileServices.writer(users);

  res.status(201).json(newUser);
});

app.get('/users/:userId', async (req, res) => {
  const { userId } = req.params;

  const users = await fileServices.reader();

  const user = users.find((u) => u.id === +userId);

  if (!user) {
    return res.status(404).json(`User with id ${userId} not found`);
  }

  res.json(user);
});

app.put('/users/:userId', async (req, res) => {
  const newUserInfo = req.body;
  const { userId } = req.params;

  const users = await fileServices.reader();

  const index = users.findIndex((u) => u.id === +userId);

  if (index === -1) {
    return res.status(404).json(`User with id ${userId} not found`);
  }

  users[index] = { ...users[index], ...newUserInfo };

  await fileServices.writer(users);

  res.status(201).json(users[index]);
});

app.delete('/users/:userId', async (req, res) => {
  const { userId } = req.params;

  const users = await fileServices.reader();

  const index = users.findIndex((u) => u.id === +userId);

  if (index === -1) {
    return res.status(404).json(`User with id ${userId} not found`);
  }

  users.splice(index, 1);

  await fileServices.writer(users);

  res.sendStatus(204);
});

app.get('/', (req, res) => {
  res.json('WELOCME')
});

app.listen(5000, () => {
  console.log('Server listen 5000');
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let users = [];

app.post('/api/SignUp', (req, res) => {
  const { email, password } = req.body;
  if (users.find(user => user.email === email)) {
    return res.status(400).send('User already exists');
  }
  users.push({ email, password });
  res.status(201).send('User created');
});

app.post('/api/Login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).send('Invalid credentials');
  }
  res.status(200).send('Login successful');
  console.log('hello')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

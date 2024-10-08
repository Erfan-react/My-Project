const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = [];

app.get('/', (req, res) => {
    res.send('Welcome to the backend App!');
  });

app.post('/signup', (req, res) => {
  const {name, email, password } = req.body;
  users.push({name, email, password });
  console.log('New user signed up:', { name, email, password })
  res.status(201).json({ message: 'User created' });
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'User signed in' });
    console.log('User signed in:', { email, password });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
    console.log('signIn attempt failed:', { email, password })
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

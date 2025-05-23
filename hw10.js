// console.log("Running the script with npm ");
// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/', (req, res) => {
  res.send('Welcome to the API.');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const request = require('request');

const app = express();
const port = 1337;
const philipPort = 1729;

app.use(express.static('dist', { index: 'productList.html' }));

app.use('/api/productPreview/all', (req, res) => {
  request(`http://localhost:${philipPort}/api/productPreview/all`).pipe(res);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

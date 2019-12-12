const express = require('express');
const request = require('request');

const app = express();
const port = 1337;
const philipPort = 1729;

app.use(express.static('dist', { index: 'productList.html' }));

app.use(/\/api\/productPreview\/.*/, (req, res) => {
  request(`${req.protocol}://localhost:${philipPort}${req.originalUrl}`).pipe(res);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

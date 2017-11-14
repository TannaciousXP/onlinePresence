'use strict';
const app = require('./app');
const PORT = process.env.port || 80;

app.listen(80, () => {
  console.log('PXTAN page listening on port 3000!');
});

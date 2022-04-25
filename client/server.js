const express = require('express');
const server = express();

const PORT = process.env.PORT || '3000';

server.use(express.static('dist'));

server.listen(PORT, () => {

  console.log(`[server] Server listening on port ${ PORT }`);
});
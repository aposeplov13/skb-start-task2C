import express from 'express';
import cors from 'cors';

import replogin from './replogin'

const app = express();
app.use(cors());
app.get('/task2C', (req, res) => {
var url = req.query.username;
res.send(replogin(url).toString());
  
});

app.listen(3000, () => {
  console.log('2Bv2 vA10');
});
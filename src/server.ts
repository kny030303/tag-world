import express, { Request, Response } from 'express';
import imgRouter from './router/img';
import path from 'path';
const app = express();

app.listen(3000, function () {
  console.debug('App is running on port 3000');
});

app.get('/', function (req: Request, res: Response) {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/public/img', imgRouter);

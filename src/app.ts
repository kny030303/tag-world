import express, { Request, Response } from 'express';
import imgRouter from './router/img';
const app = express();

app.listen(3000, function () {
  console.log('App is running on port 3000');
});

app.get('/', function (req: Request, res: Response) {
  res.sendFile(`${__dirname}/view/index.html`);
});

app.use('/public/img', imgRouter);

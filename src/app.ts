import express, { Request, Response } from 'express';

const app = express();

app.listen(3000, function () {
  console.log('App is running on port 3000');
});

app.get('/', function (req: Request, res: Response) {
  res.sendfile(`${__dirname}/view/index.html`);
});

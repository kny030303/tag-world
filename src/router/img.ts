import express from 'express';
import { readFile } from 'fs';
import path from 'path';

const router = express.Router();

/* GET users listing. */
router.get('/back.png', function (req, res) {
  readFile(path.join(__dirname, '../public/img/back.png'), (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

export default router;

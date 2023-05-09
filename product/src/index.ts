import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import playerRouter from './router/user.router';
import './services/passport';

import * as dotenv from 'dotenv';
dotenv.config();

createConnection().then((connection) => {
  const app: Application = express();
  app.use(bodyParser.json());


  app.use('/api', playerRouter);

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
  });
});
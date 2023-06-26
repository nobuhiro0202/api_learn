import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const
  app = express(),
  port = process.env.PORT || 8000;

app.use('/v1', routes);

app.listen(port, () => console.log(`Server is listening on ${port}`));
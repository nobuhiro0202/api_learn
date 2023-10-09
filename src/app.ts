import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const
  app = express(),
  port = process.env.PORT || 8000;

const measureExecutionTime = (req: Request, res: Response, next: NextFunction) => {
  const startTime = performance.now();
  res.once('finish', () => {
    const executionTime = (performance.now() - startTime).toFixed(2);
    console.log(`Request took ${executionTime} ms`);
  });
  next();
};

app.use(measureExecutionTime);
app.use('/v1', routes);

app.listen(port, () => console.log(`Server is listening on ${port}`));
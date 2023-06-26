import { Request, Response } from 'express';

const rootHandler = (_req: Request, res: Response) => {
  return res.send('Hello, Your API is working!!');
};

export default rootHandler;

import { Request, Response } from 'express';
import { HelloResponse } from '../../types';

interface HelloBuilder {
  (name: string): HelloResponse;
};

const helloBuilder: HelloBuilder = (name: string) => ({ hello: name || 'World' });

const helloHandler = (req: Request, res: Response) => {
  const
    name     = req.params.name || 'World',
    response = helloBuilder(name);

  return res.json(response);
};

export default helloHandler;
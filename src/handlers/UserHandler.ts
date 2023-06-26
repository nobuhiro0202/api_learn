import { Request, Response } from 'express';
import { User } from '../types';

const userHandler = {
  getUsers: (req: Request, res: Response) => {},
  registerUser: (req: Request, res: Response) => {},
  getUser: (req: Request, res: Response) => {},
  updateUser: (req: Request, res: Response) => {},
  deleteUser: (req: Request, res: Response) => {},
};

export default userHandler;
import { Request, Response } from 'express';
import { Friends } from '../types';

const friendsHandler = {
  getFriends: (req: Request, res: Response) => {},
  addFriends: (req: Request, res: Response) => {},
  deleteFriends: (req: Request, res: Response) => {},
  getUpdates: (req: Request, res: Response) => {},
};

export default friendsHandler;
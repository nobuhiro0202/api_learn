import { Request, Response } from 'express';
import { User } from '../types';
import client from '../db_connect'

const usersHandler = {
  getUsers: async (req: Request, res: Response) => {
    try {
      await client.connect();
      const result = await client.query('SELECT COUNT(*) FROM users');
      await client.end();

      res.status(200).json({ message: 'OK', count: result.rows[0].count });
    } catch (error: any) { res.status(500).json({ message: 'Internal Server Error', error: error.message }); }
  },
  registerUser: (req: Request, res: Response) => {},
  getUser: (req: Request, res: Response) => {},
  updateUser: (req: Request, res: Response) => {},
  deleteUser: (req: Request, res: Response) => {},
  getUpdates: (req: Request, res: Response) => {},
};

export default usersHandler;
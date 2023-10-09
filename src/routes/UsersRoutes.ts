import express, { Request, Response} from 'express';
import { usersHandler } from '../handlers';

const router = express.Router();

router.get('/', usersHandler.getUsers);
router.post('/', usersHandler.registerUser);
router.get('/:id', usersHandler.getUser);
router.patch('/:id', usersHandler.updateUser);
router.delete('/:id', usersHandler.deleteUser);
router.get('/:id/updates', usersHandler.getUpdates);

export default router;
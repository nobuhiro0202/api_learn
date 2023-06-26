import express from 'express';
import { userHandler } from '../../handlers';

const router = express.Router();

router.get('/', userHandler.getUsers);
router.post('/', userHandler.registerUser);
router.get('/:id', userHandler.getUser);
router.patch('/:id', userHandler.updateUser);
router.delete('/:id', userHandler.deleteUser);

export default router;
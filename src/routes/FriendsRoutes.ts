import express from 'express';
import { friendsHandler } from '../handlers';

const router = express.Router();

router.get('/', friendsHandler.getFriends);
router.post('/', friendsHandler.addFriends);
router.delete('/:id', friendsHandler.deleteFriends);

export default router;
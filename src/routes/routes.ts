import express from 'express';
import UserRoutes from './UserRoutes';
import FriendsRoutes from './FriendsRoutes';

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/users/:id/friends', FriendsRoutes);

export default router;
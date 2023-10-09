import express from 'express';
import UsersRoutes from './UsersRoutes';
import FriendsRoutes from './FriendsRoutes';
import UpdatesRoutes from './UpdatesRoutes';

const router = express.Router();

router.use('/users', UsersRoutes);
router.use('/users/:id/friends', FriendsRoutes);
router.use('/updates', UpdatesRoutes);

export default router;
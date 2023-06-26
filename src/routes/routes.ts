import express from 'express';
import UserRoutes from './user/UserRoutes';

const router = express.Router();

router.get('/users', UserRoutes);

export default router;
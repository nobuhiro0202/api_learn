import express from 'express';
import RootRoutes from './root/RootRoutes';
import HelloRoutes from './hello/HelloRoutes';

const router = express.Router();

router.get('/', RootRoutes);
router.get('/hello', HelloRoutes);

export default router;
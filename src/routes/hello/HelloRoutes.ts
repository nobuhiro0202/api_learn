import express from 'express';
import { helloHandler } from '../../handlers';

const router = express.Router();

router.get('/', helloHandler);
router.get('/:name', helloHandler);

export default router;
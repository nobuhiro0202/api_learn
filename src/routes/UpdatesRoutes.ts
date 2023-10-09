import express from 'express';
import { updatesHandler } from '../handlers';

const router = express.Router();

router.put('/:id', updatesHandler.editUpdate);
router.delete('/:id', updatesHandler.deleteUpdate);
router.post('/', updatesHandler.postUpdate);

export default router;
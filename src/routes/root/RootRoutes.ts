import express from 'express';
import { rootHandler} from '../../handlers';

const router = express.Router();

router.get('/', rootHandler);

export default router;
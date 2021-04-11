import express from 'express';

import { getTips, createTip} from '../controllers/tips.js';

const router = express.Router();

router.get('/', getTips);
router.post('/upload/post', createTip); 

export default router;
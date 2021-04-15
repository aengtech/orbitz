import express from 'express';

import { getCars, createCar, updateCar } from '../controllers/car.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getCars);
router.post('/upload/post', auth, createCar);
router.patch('/:id', auth, updateCar);

export default router;
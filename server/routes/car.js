import express from 'express';

import { getCars, getCar, createCar} from '../controllers/car.js';

const router = express.Router();

router.get('/', getCars);

router.get('/cars/:id', getCar);
router.post('/upload/post', createCar);

export default router;
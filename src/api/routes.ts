import { Router } from 'express';
import priceRouter from './price/price.controller';

const router = Router();

router.use('/price', priceRouter);

export default router;

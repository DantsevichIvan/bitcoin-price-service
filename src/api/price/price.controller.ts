import { Router, Request, Response, NextFunction } from 'express';

import { ERROR_MESSAGES } from '../../constants/messages';
import { HTTP_STATUS } from '../../constants/http';
import { AppError } from '../../errors/AppError';
import { priceService } from '../../services';

const router = Router();

router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const price = priceService.getPrice();

    if (!price) {
      throw new AppError(ERROR_MESSAGES.PRICE_UNAVAILABLE, HTTP_STATUS.SERVICE_UNAVAILABLE);
    }

    res.status(HTTP_STATUS.OK).json(price);
  } catch (error) {
    next(error);
  }
});

export default router;

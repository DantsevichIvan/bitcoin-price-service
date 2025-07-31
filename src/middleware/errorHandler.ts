import { Request, Response, NextFunction } from 'express';
import { getErrorData } from '../utils/error';

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  const { status, message } = getErrorData(err);
  console.error('[ERROR]', err);

  res.status(status).json({
    error: message,
  });
}

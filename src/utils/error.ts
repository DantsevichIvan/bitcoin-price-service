import { HTTP_STATUS } from '../constants/http';
import { ERROR_MESSAGES } from '../constants/messages';
import { AppError } from '../errors/AppError';

export function getErrorData(err: Error) {
  if (err instanceof AppError) {
    return {
      status: err.statusCode,
      message: err.message,
    };
  }

  return {
    status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
  };
}

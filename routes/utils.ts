import { Response } from 'express';

/**
 * Common utilities used in the app
 */
export class Utils {
  /**
   * Sends a JSON error
   * @param res A `Response` instance
   * @param error The error
   */
  public static sendJsonError(res: Response, error: any) {
    return res.send(error);
  }
}

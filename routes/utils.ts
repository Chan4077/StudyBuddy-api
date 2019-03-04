import { Response } from 'express';

/**
 * Common utilities used in the app
 */
export class Utils {
  /**
   * Sends a JSON error
   * @param res A `Response` instance
   * @param error The error
   * @param status The status of the request, if any
   * @returns The instance of `res`
   */
  public static sendJsonError(res: Response, error: any, status?: number): Response {
    return status ? res.status(status).send(error) : res.send(error);
  }
}

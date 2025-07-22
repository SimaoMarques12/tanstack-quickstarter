import { Request, Response, NextFunction } from 'express';

interface LoggerOptions {
  logTimestamp?: boolean;
  logBody?: boolean;
  logHeaders?: boolean;
}

const loggerMiddleware = (options: LoggerOptions = {}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const timestamp = options.logTimestamp ? `[${new Date().toISOString()}] ` : '';
    const method = req.method;
    const url = req.originalUrl || req.url;
    const ip = req.ip || req.connection.remoteAddress;

    let logMessage = `${timestamp}${method} ${url} - IP: ${ip}`;

    if (options.logBody && req.body) {
      // Note: req.body will only be populated if a body-parser middleware
      // (like express.json() or express.urlencoded()) has run before this logger.
      logMessage += ` Body: ${JSON.stringify(req.body)}`;
    }

    if (options.logHeaders && req.headers) {
      logMessage += ` Headers: ${JSON.stringify(req.headers)}`;
    }

    console.log(logMessage);

    next();
  };
};

export default loggerMiddleware;
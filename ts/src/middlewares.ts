import {Request, Response, NextFunction} from "express/ts4.0";

export function notFound(req: Request, res: Response, next: NextFunction): void {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
    next();
}
import 'reflect-metadata';
import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.config();
    this.routes();
    this.middlewaresErrors();
  }

  config() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  middlewaresErrors() {
    this.server.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

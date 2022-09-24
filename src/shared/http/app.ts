import 'reflect-metadata';
import express, { Express, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import { pagination } from 'typeorm-pagination';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import { errors } from 'celebrate';
import uploadConfig from '@config/upload';

class App {
  public server: Express;

  constructor() {
    this.server = express();
    this.config();
    this.middlewarePagination();
    this.routes();
    this.middlewaresErrors();
  }

  config() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  middlewaresErrors() {
    this.server.use(errors());

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
    this.server.use('/files', express.static(uploadConfig.directory));
    this.server.use(routes);
  }

  middlewarePagination() {
    this.server.use(pagination);
  }
}

export default new App().server;

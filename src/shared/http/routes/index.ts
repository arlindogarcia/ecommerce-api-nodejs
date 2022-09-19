import productsRouter from '@modules/products/routes/products.routes';
import usersRoutes from '@modules/users/router';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRoutes);

export default routes;

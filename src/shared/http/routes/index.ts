import productsRouter from '@modules/products/routes/products.routes';
import sessionsRouter from '@modules/users/router/sessions.routes';
import usersRoutes from '@modules/users/router/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRouter);

export default routes;

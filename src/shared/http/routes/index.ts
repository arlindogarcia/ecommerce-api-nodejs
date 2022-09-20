import productsRouter from '@modules/products/routes/products.routes';
import passwordRouter from '@modules/users/router/password.routes';
import profileRouter from '@modules/users/router/profile.routes';
import sessionsRouter from '@modules/users/router/sessions.routes';
import usersRoutes from '@modules/users/router/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;

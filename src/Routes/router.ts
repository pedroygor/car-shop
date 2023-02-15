import { Router } from 'express';
import routerCar from './car.routes';
import routerMotorcycle from './motorcycle.routes';

const routes = Router();

routes.use(routerCar);
routes.use(routerMotorcycle);

export default routes;
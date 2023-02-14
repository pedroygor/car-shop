import { Router } from 'express';
import routerCar from './car.routes';

const routes = Router();

routes.use(routerCar);

export default routes;
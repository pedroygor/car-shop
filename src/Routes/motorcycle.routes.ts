import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

const motorcycleRouteById = '/motorcycles/:id';

router.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

router.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());

router.get(
  motorcycleRouteById, 
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

router.put(
  motorcycleRouteById,
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

router.delete(
  motorcycleRouteById, 
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default router;
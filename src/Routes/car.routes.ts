import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

const carRouteById = '/cars/:id';

router.post('/cars', (req, res, next) => new CarController(req, res, next).create());

router.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

router.get(carRouteById, (req, res, next) => new CarController(req, res, next).findById());

router.put(carRouteById, (req, res, next) => new CarController(req, res, next).update());

router.delete(carRouteById, (req, res, next) => new CarController(req, res, next).delete());

export default router;
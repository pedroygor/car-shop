import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  private errorCar = 'Car not found';

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create(): Promise<void> {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      
      this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll(): Promise<void> {
    try {
      const cars = await this.service.findAll();

      this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById(): Promise<void> {
    try {
      const car = await this.service.findById(this.req.params.id);

      if (!car) {
        this.res.status(404).json({ message: this.errorCar });
        return;
      }

      if (typeof car === 'string') {
        this.res.status(422).json({ message: car });
        return;
      }

      this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update(): Promise<void> {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const updatedCar = await this.service.update(this.req.params.id, car);

      if (!updatedCar) {
        this.res.status(404).json({ message: this.errorCar });
        return;
      }

      if (typeof updatedCar === 'string') {
        this.res.status(422).json({ message: updatedCar });
        return;
      }

      this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete(): Promise<void> {
    try {
      const deletedCar = await this.service.delete(this.req.params.id);

      if (!deletedCar) {
        this.res.status(404).json({ message: this.errorCar });
        return;
      }

      if (typeof deletedCar === 'string') {
        this.res.status(422).json({ message: deletedCar });
        return;
      }

      this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}  
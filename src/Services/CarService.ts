import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(car: ICar): Promise<Car> {
    let { status } = car;

    if (status === undefined) {
      status = false;
    }

    const carODM = new CarODM();
    const newCar = await carODM.create({ ...car, status });
    return this.createCarDomain(newCar);
  }

  public async findAll(): Promise<ICar[]> {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    return cars.map((car) => this.createCarDomain(car)) as unknown[] as ICar[];
  }

  public async findById(id: string): Promise<Car | null | string> {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (!car) {
      return null;
    }

    if (typeof car === 'string') {
      return car;
    }

    return this.createCarDomain(car);
  }

  public async update(id: string, car: ICar): Promise<Car | null | string> {
    try {
      const carODM = new CarODM();
      const updatedCar = await carODM.update(id, car);
      if (!updatedCar) {
        return null;
      }
      return this.createCarDomain(updatedCar);
    } catch ({ message }) {
      return message as unknown as string;
    }
  }

  public async delete(id: string): Promise<Car | null | string> {
    try {
      const carODM = new CarODM();
      const deletedCar = await carODM.delete(id);
      if (!deletedCar) {
        return null;
      }
      return this.createCarDomain(deletedCar);
    } catch ({ message }) {
      return message as unknown as string;
    }
  }
}
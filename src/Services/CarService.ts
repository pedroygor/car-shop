import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar): Promise<Car | null> {
    let { status } = car;
    
    if (status === undefined) {
      status = false;
    }

    const carODM = new CarODM();
    const newCar = await carODM.create({ ...car, status });
    return this.createCarDomain(newCar);
  }
}
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async create(motorcycle: IMotorcycle): Promise<Motorcycle> {
    let { status } = motorcycle;

    if (status === undefined) {
      status = false;
    }

    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create({ ...motorcycle, status });
    return this.createMotorcycleDomain(newMotorcycle);
  }
}
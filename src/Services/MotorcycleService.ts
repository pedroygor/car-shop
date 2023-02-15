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

  public async findAll(): Promise<Motorcycle[]> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findAll();

    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async findById(id: string): Promise<Motorcycle | null | string> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (!motorcycle) {
      return null;
    }

    if (typeof motorcycle === 'string') {
      return motorcycle;
    }

    return this.createMotorcycleDomain(motorcycle);
  }
}
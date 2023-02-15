import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor( 
    { id, model, year, color, status, buyValue, category, engineCapacity }: IMotorcycle,
  ) {
    super(id, model, year, color, status, buyValue);
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
  
  public getCategory(): 'Street' | 'Custom' | 'Trail' {
    return this.category;
  }
  
  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
  
  public setCategory(category: 'Street' | 'Custom' | 'Trail'): void {
    this.category = category;
  }
  
  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }
}
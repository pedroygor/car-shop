import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor( 
    { id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar,
  ) {
    super(id, model, year, color, status, buyValue);
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
  
  public getDoorsQty(): number {
    return this.doorsQty;
  }
  
  public getSeatsQty(): number {
    return this.seatsQty;
  }
  
  public setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }
  
  public setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
  }
}
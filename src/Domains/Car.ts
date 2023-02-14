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

  public getId(): string | undefined {
    return super.getId();
  }

  public getModel(): string {
    return super.getModel();
  }
  
  public getYear(): number {
    return super.getYear();
  }
  
  public getColor(): string {
    return super.getColor();
  }
  
  public getStatus(): boolean {
    return super.getStatus();
  }
  
  public getBuyValue(): number {
    return super.getBuyValue();
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
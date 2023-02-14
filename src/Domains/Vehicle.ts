export default abstract class Vehicle {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;

  constructor(
    id: string | undefined,
    model: string,
    year: number,
    color: string,
    status: boolean | undefined,
    buyValue: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }

  public getId(): string | undefined {  
    return this.id;
  }

  public getModel(): string {
    return this.model;
  }
  public getYear(): number {
    return this.year;
  }
  public getColor(): string {
    return this.color;
  }
  public getStatus(): boolean {
    if (!this.status) {
      throw new Error('Status not found');
    }
    return this.status;
  }
  public getBuyValue(): number {
    return this.buyValue;
  }

  public setId(id: string): void {
    this.id = id;
  }
  
  public setModel(model: string): void {
    this.model = model;
  }
  public setYear(year: number): void {
    this.year = year;
  }
  public setColor(color: string): void {
    this.color = color;
  }
  public setStatus(status: boolean): void {
    this.status = status;
  }
  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }
}
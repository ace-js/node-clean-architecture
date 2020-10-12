import { Customer } from './../customers/customer';
import { Employee } from './../employees/employee';
import { Product } from './../products/product';
import { IEntity } from './../common/entity.interface';

export class Sale implements IEntity {
  public id?: number;
  public date?: Date;
  public product?: Product;
  public employee?: Employee;
  public customer?: Customer;
  private _quantity: number = 0;
  private _totalPrice: number = 0;
  private _unitPrice: number = 0;

  public getUnitPrice(): number {
    return this._unitPrice;
  }

  public setUnitPrice(price: number): void {
    this._unitPrice = price;
    this.setTotalPrice();
  }

  public getQuantity(): number {
    return this._quantity;
  }

  public setQuantity(qty: number): void {
    this._quantity = qty;
    this.setTotalPrice();
  }

  public getTotalPrice(): number {
    return this._totalPrice;
  }

  private setTotalPrice(): void {
    this._totalPrice = this._quantity * this._unitPrice;
  }
}

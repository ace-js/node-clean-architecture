import { IEntity } from './../common/entity.interface';
export class Product implements IEntity {
  public id?: number;
  public name?: string;
  public price?: number;
}
import { IEntity } from './../common/entity.interface';
export class Customer implements IEntity {
  public id?: number;
  public name?: string;
}
import { IEntity } from '../common/entity.interface';
export class Employee implements IEntity {
  public id?: number;
  public name?: string;
}
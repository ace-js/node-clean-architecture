import { IEntity } from '../common/entity.interface';

type CustomerBuilderType = {
  id: number;
  name: string;
};

export class Customer implements IEntity {
  public id?: number;
  public name?: string;

  public static build({ id, name }: CustomerBuilderType): Customer {
    const customer = new Customer();
    customer.id = id;
    customer.name = name;
    return customer;
  }
}

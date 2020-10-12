import { Customer } from 'domain/customers/customer';

import { IGetCustomerQuery } from './get-customer-query.interface';
import { CustomerModel } from './cutomer.model';
import { IRepository } from './../../interfaces/repository.interface';

export class GetCustomerQuery implements IGetCustomerQuery {
  private readonly _repository: IRepository<Customer>;

  constructor(repository: IRepository<Customer>){
    this._repository = repository;
  }

  public async execute(): Promise<Array<CustomerModel>> {
    const customers = await this._repository.getAll();
    return customers.map(c => CustomerModel.build({ id: c.id!, name: c.name!}))
  }
}
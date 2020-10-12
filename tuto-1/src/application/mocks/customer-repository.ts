import { Customer } from 'domain/customers/customer';
import { IRepository } from './../interfaces/repository.interface';

let customers: Array<Customer> = [];

export class MockCustomerRepository implements IRepository<Customer> {
  private _customers: Array<Customer>;
  constructor(customers: Array<Customer> = []) {
    this._customers = customers;
  }

  get(id: number): Promise<Customer | undefined> {
    return Promise.resolve(this._customers.find((c) => c.id === id));
  }

  getAll(): Promise<Customer[]> {
    return Promise.resolve(this._customers);
  }

  create(domainEntity: Customer): Promise<boolean> {
    this._customers.push(domainEntity);
    return Promise.resolve(true);
  }

  update(domainEntity: Customer): Promise<boolean> {
    const index = this._customers.findIndex((c) => c.id === domainEntity.id);
    if (index >= 0) {
      this._customers[index] = domainEntity;
      return Promise.resolve(true);
    }

    return Promise.reject(false);
  }

  delete(id: number): Promise<boolean> {
    if (this._customers.some((c) => c.id)) {
      this._customers = this._customers.filter((c) => c.id !== id);
      return Promise.resolve(true);
    }

    return Promise.reject(false);
  }

  save(): void {
  }
}



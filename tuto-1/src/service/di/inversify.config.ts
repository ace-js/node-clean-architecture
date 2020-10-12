import { Container } from 'inversify';

//domain
import { Customer } from 'domain/customers/customer';

// application
import {
  GetCustomersQuery,
  IGetCustomersQuery,
} from 'application/customers/queries';
import { MockCustomerRepository } from 'application/mocks/customer-repository';
import { IRepository } from 'application/interfaces';

import { TYPES } from './types';

// controllers
import '../controllers/customers';

// repositories
const customerRepository: IRepository<Customer> = new MockCustomerRepository([
  Customer.build({ id: 42, name: 'Arnaud' }),
]);

// queries
const getCustomersQuery: IGetCustomersQuery = new GetCustomersQuery(
  customerRepository,
);

const container = new Container();

container
  .bind<IGetCustomersQuery>(TYPES.GetCustomersQuery)
  .toConstantValue(getCustomersQuery);

export { container };

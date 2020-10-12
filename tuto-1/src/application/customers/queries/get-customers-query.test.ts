import { MockCustomerRepository } from '../../mocks/customer-repository';
import { GetCustomersQuery } from './get-customers-query';
import { Customer } from 'domain/customers/customer';
import { IRepository } from '../../interfaces/repository.interface';

describe("GetCustomersQuery", () => {
  let customerRepository: IRepository<Customer>;
  let getCustomersQuery: GetCustomersQuery;

  beforeAll(() => {
    customerRepository = new MockCustomerRepository([  Customer.build({ id: 1, name: "TestCustomer"})]);
    getCustomersQuery = new GetCustomersQuery(customerRepository);
  });

  it("Should return an array with one Customer", async () => {
    const customers = await getCustomersQuery.execute();

    expect(customers.length).not.toBe(0);
    expect(customers.length).toBe(1);
  })
})

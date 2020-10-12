import { MockCustomerRepository } from './../../mocks/customer-repository';
import { GetCustomerQuery } from './get-customers-query';
import { Customer } from 'domain/customers/customer';
import { IRepository } from './../../interfaces/repository.interface';

describe("GetCustomerQuery", () => {
  let customerRepository: IRepository<Customer>;
  let getCustomerQuery: GetCustomerQuery;

  beforeAll(() => {
    customerRepository = new MockCustomerRepository([  Customer.build({ id: 1, name: "TestCustomer"})]);
    getCustomerQuery = new GetCustomerQuery(customerRepository);
  });

  it("Should return an array with one Customer", async () => {
    const customers = await getCustomerQuery.execute();

    expect(customers.length).not.toBe(0);
    expect(customers.length).toBe(1);
  })
})

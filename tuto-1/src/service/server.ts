import { MockCustomerRepository } from 'application/mocks/customer-repository';
import { Customer } from 'domain/customers/customer';
import { IRepository } from 'application/interfaces/repository.interface';
import { GetCustomerQuery } from 'application/customers/queries/get-customers-query';
import express, { Application, json, Request, Response } from 'express';
import { IGetCustomerQuery } from 'application/customers/queries/get-customer-query.interface';

const app: Application = express()

app.use(json())
const customerRepository: IRepository<Customer> = new MockCustomerRepository([ Customer.build({ id: 42, name: 'Arnaud '})])

app.get('/customers', async (req: Request, res: Response) => {
  const getCustomerQuery: IGetCustomerQuery = new GetCustomerQuery(customerRepository);
  const customers = await getCustomerQuery.execute();
  res.status(200).send(customers)
})

app.listen(3000, () => console.log('app listening on 3000'))
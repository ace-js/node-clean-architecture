import { Employee } from '../employees/employee';
import { Product } from '../products/product';
import { Customer } from '../customers/customer';
import { Sale } from './sale';

const id: number = 1;
const date: Date = new Date();
const unitPrice: number = 2.5;
const quantity: number = 3;
const sale: Sale = new Sale();
const customer: Customer = new Customer();
const product: Product = new Product();
const employee: Employee = new Employee();

describe('Sale', () => {
  it('Should set Id', () => {
    sale.id = id;

    expect(sale.id).toBe(id);
  });

  it('Should set Date', () => {
    sale.date = date;

    expect(sale.date).toBe(date);
  });

  it('Should set customer', () => {
    sale.customer = customer;

    expect(sale.customer).toBe(customer);
  });

  it('Should set product', () => {
    sale.product = product;

    expect(sale.product).toBe(product);
  });

  it('Should set employee', () => {
    sale.employee = employee;

    expect(sale.employee).toBe(employee);
  });

  it('Should set unitPrice', () => {
    sale.setUnitPrice(unitPrice);

    expect(sale.getUnitPrice()).toBe(unitPrice);
  });

  it('Should set quantity', () => {
    sale.setQuantity(quantity);

    expect(sale.getQuantity()).toBe(quantity);
  });

  it('Should set total price based on quatity & unity price', () => {
    sale.setQuantity(quantity);
    sale.setUnitPrice(unitPrice);

    expect(sale.getTotalPrice()).toBe(quantity * unitPrice);
  });
});

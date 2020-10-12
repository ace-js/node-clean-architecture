import { Customer } from './customer';

const product = new Customer();
const id = 1;
const name = "test";

describe('Customer', () => {
  it('Should set Id', () => {
    product.id = id;

    expect(product.id).toBe(id);
  });

  it('Should set Name', () => {
    product.name = name;

    expect(product.name).toBe(name);
  });
});
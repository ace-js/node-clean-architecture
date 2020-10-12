import { Employee } from './employee';

const product = new Employee();
const id = 1;
const name = "test";

describe('Employee', () => {
  it('Should set Id', () => {
    product.id = id;

    expect(product.id).toBe(id);
  });

  it('Should set Name', () => {
    product.name = name;

    expect(product.name).toBe(name);
  });
});
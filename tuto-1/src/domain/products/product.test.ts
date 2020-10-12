import { Product } from './product';

const product = new Product();
const id = 1;
const name = "test";
const price = 2.2;

describe('Product', () => {
  it('Should set Id', () => {
    product.id = id;

    expect(product.id).toBe(id);
  });

  it('Should set Name', () => {
    product.name = name;

    expect(product.name).toBe(name);
  });

  it('Should set Price', () => {
    product.price = price;

    expect(product.price).toBe(price);
  });

});
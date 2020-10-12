type CustomerModelBuilder = {
  id: number;
  name: string;
};

export class CustomerModel {
  public id?: number;
  public name?: string;

  public static build({ id, name }: CustomerModelBuilder): CustomerModel {
    const customerModel = new CustomerModel();
    customerModel.id = id;
    customerModel.name = name;
    return customerModel;
  }
}

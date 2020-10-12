import { CustomerModel } from "./cutomer.model";

export interface IGetCustomerQuery {
  execute(): Promise<Array<CustomerModel>>
}
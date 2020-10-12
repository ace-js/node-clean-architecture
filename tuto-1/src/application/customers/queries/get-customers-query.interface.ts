import { CustomerModel } from "./cutomer.model";

export interface IGetCustomersQuery {
  execute(): Promise<Array<CustomerModel>>
}
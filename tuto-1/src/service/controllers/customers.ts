import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet, interfaces } from 'inversify-express-utils'

import { IGetCustomersQuery } from 'application/customers/queries';

import { TYPES } from './../di/types';

@controller('/customers')
export default class CustomersController extends BaseHttpController {
  constructor(@inject(TYPES.GetCustomersQuery) private _getCustomersQuery: IGetCustomersQuery) {
   super()
  }

  @httpGet('/')
  public async getAll(): Promise<interfaces.IHttpActionResult> {
      const customers = await this._getCustomersQuery.execute()
      return this.ok({ customers })

  }
}
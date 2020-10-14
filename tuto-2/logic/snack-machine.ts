import { Money } from './money';
export class SnackMachine {
  private _moneyInside: Money;
  private _moneyInTransaction: Money;

  constructor () {
    this._moneyInTransaction = new Money(0, 0, 0, 0, 0, 0);
    this._moneyInside = new Money(0, 0, 0, 0, 0, 0);
  }
  
  public getMoneyInside(): Money {
    return this._moneyInside;
  }

  public getMoneyInTransaction(): Money {
    return this._moneyInTransaction;
  }

  public insertMoney(money: Money): void {
    this._moneyInTransaction = Money.combineMoney(
      this._moneyInTransaction,
      money,
    );
  }

  public returnMoney(): void {
    this.nullifyMoneyInTransaction();
  }

  public buyASnack(): void {
    this._moneyInside = Money.combineMoney(
      this._moneyInside,
      this._moneyInTransaction,
    );

    this.nullifyMoneyInTransaction();
  }

  private nullifyMoneyInTransaction(): void {
    this._moneyInTransaction = new Money(0, 0, 0, 0, 0, 0);
  }
}

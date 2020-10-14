import { Money } from './../money';
import { SnackMachine } from './../snack-machine';
describe('SnackMachine', () => {
  it('insertMoney: should change moneyInTransaction amount', () => {
    const snackMachine = new SnackMachine();
    const money = new Money(0, 2, 0, 4, 0, 0);

    const moneyInTransaction: Money = JSON.parse(
      JSON.stringify(snackMachine.getMoneyInTransaction()),
    );

    expect(moneyInTransaction.oneCentCount).toBe(0);
    expect(moneyInTransaction.tenCentCount).toBe(0);
    expect(moneyInTransaction.quarterCount).toBe(0);
    expect(moneyInTransaction.oneEuroCount).toBe(0);
    expect(moneyInTransaction.fiveEuroCount).toBe(0);
    expect(moneyInTransaction.twentyEuroCount).toBe(0);

    snackMachine.insertMoney(money);
    expect(snackMachine.getMoneyInTransaction().tenCentCount).toBe(
      money.tenCentCount + moneyInTransaction.tenCentCount,
    );
    expect(snackMachine.getMoneyInTransaction().oneEuroCount).toBe(
      money.oneEuroCount + moneyInTransaction.oneEuroCount,
    );
  });

  it('returnMoney: should set to 0 all money amounts', () => {
    const snackMachine = new SnackMachine();
    snackMachine.insertMoney(new Money(2, 2, 2, 2, 2, 2));

    expect(snackMachine.getMoneyInTransaction().oneCentCount).not.toBe(0);
    expect(snackMachine.getMoneyInTransaction().tenCentCount).not.toBe(0);
    expect(snackMachine.getMoneyInTransaction().quarterCount).not.toBe(0);
    expect(snackMachine.getMoneyInTransaction().oneEuroCount).not.toBe(0);
    expect(snackMachine.getMoneyInTransaction().fiveEuroCount).not.toBe(0);
    expect(snackMachine.getMoneyInTransaction().twentyEuroCount).not.toBe(0);

    snackMachine.returnMoney();
    expect(snackMachine.getMoneyInTransaction().oneCentCount).toBe(0);
    expect(snackMachine.getMoneyInTransaction().tenCentCount).toBe(0);
    expect(snackMachine.getMoneyInTransaction().quarterCount).toBe(0);
    expect(snackMachine.getMoneyInTransaction().oneEuroCount).toBe(0);
    expect(snackMachine.getMoneyInTransaction().fiveEuroCount).toBe(0);
    expect(snackMachine.getMoneyInTransaction().twentyEuroCount).toBe(0);
  });

  it('buySnack: should set add in moneyInside all moneyIntransaction', () => {
    const snackMachine = new SnackMachine();

    const money1 = new Money(2, 2, 2, 2, 2, 2);
    const money2 = new Money (0, 4, 0, 0, 0, 0)

    snackMachine.insertMoney(new Money(2, 2, 2, 2, 2, 2));

    expect(snackMachine.getMoneyInside().oneCentCount).toBe(0);
    expect(snackMachine.getMoneyInside().tenCentCount).toBe(0);
    expect(snackMachine.getMoneyInside().quarterCount).toBe(0);
    expect(snackMachine.getMoneyInside().oneEuroCount).toBe(0);
    expect(snackMachine.getMoneyInside().fiveEuroCount).toBe(0);
    expect(snackMachine.getMoneyInside().twentyEuroCount).toBe(0);

    snackMachine.buyASnack();

    expect(snackMachine.getMoneyInside().oneCentCount).toBe(money1.oneCentCount);
    expect(snackMachine.getMoneyInside().tenCentCount).toBe(money1.tenCentCount);
    expect(snackMachine.getMoneyInside().quarterCount).toBe(money1.quarterCount);
    expect(snackMachine.getMoneyInside().oneEuroCount).toBe(money1.oneEuroCount);
    expect(snackMachine.getMoneyInside().fiveEuroCount).toBe(money1.fiveEuroCount);
    expect(snackMachine.getMoneyInside().twentyEuroCount).toBe(money1.twentyEuroCount);

    snackMachine.insertMoney(money2);
    snackMachine.buyASnack();

    expect(snackMachine.getMoneyInside().oneCentCount).toBe(money1.oneCentCount + money2.oneCentCount);
    expect(snackMachine.getMoneyInside().tenCentCount).toBe(money1.tenCentCount + money2.tenCentCount);
    expect(snackMachine.getMoneyInside().quarterCount).toBe(money1.quarterCount + money2.quarterCount);
    expect(snackMachine.getMoneyInside().oneEuroCount).toBe(money1.oneEuroCount + money2.oneEuroCount);
    expect(snackMachine.getMoneyInside().fiveEuroCount).toBe(money1.fiveEuroCount + money2.fiveEuroCount);
    expect(snackMachine.getMoneyInside().twentyEuroCount).toBe(money1.twentyEuroCount + money2.twentyEuroCount);
  });
});

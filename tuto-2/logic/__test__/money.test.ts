import { Money } from './../money';

describe('Money', () => {
  it('combineMoney: should return an new money instance with combined amounts', () => {
    const money1 = new Money(0, 1, 2, 5, 3, 0);
    const money2 = new Money(1, 4, 4, 2, 4, 3);

    const combinedMoney: Money = Money.combineMoney(money1, money2);

    expect(combinedMoney.oneCentCount).toBe(
      money1.oneCentCount + money2.oneCentCount,
    );
    expect(combinedMoney.tenCentCount).toBe(
      money1.tenCentCount + money2.tenCentCount,
    );
    expect(combinedMoney.quarterCount).toBe(
      money1.quarterCount + money2.quarterCount,
    );
    expect(combinedMoney.oneEuroCount).toBe(
      money1.oneEuroCount + money2.oneEuroCount,
    );
    expect(combinedMoney.fiveEuroCount).toBe(
      money1.fiveEuroCount + money2.fiveEuroCount,
    );
    expect(combinedMoney.twentyEuroCount).toBe(
      money1.twentyEuroCount + money2.twentyEuroCount,
    );
  });
});

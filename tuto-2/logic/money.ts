export class Money {
  public oneCentCount: number;
  public tenCentCount: number;
  public quarterCount: number;
  public oneEuroCount: number;
  public fiveEuroCount: number;
  public twentyEuroCount: number;

  constructor(
    oneCentCount: number,
    tenCentCount: number,
    quarterCount: number,
    oneEuroCount: number,
    fiveEuroCount: number,
    twentyEuroCount: number,
  ) {
    this.oneCentCount = oneCentCount;
    this.tenCentCount = tenCentCount;
    this.quarterCount = quarterCount;
    this.oneEuroCount = oneEuroCount;
    this.fiveEuroCount = fiveEuroCount;
    this.twentyEuroCount = twentyEuroCount;
  }

  public static combineMoney(money1: Money, money2: Money): Money {
    const sum: Money = new Money(
      money1.oneCentCount + money2.oneCentCount,
      money1.tenCentCount + money2.tenCentCount,
      money1.quarterCount + money2.quarterCount,
      money1.oneEuroCount + money2.oneEuroCount,
      money1.fiveEuroCount + money2.fiveEuroCount,
      money1.twentyEuroCount + money2.twentyEuroCount,
    );

    return sum;
  }
}

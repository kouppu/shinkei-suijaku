export default class PlayerPoint {
  private static MIN_POINT: number = 0;
  readonly value: number;

  constructor(value: number) {
    if (value < PlayerPoint.MIN_POINT) {
      throw 'Value must be 0 or more.';
    }

    this.value = value;
  }

  public add(value: number) {
    return new PlayerPoint(this.value + value);
  }
}

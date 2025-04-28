import { Calculator } from "../calculator.js";

test("Calculator add method", () => {
    expect(Calculator.add(1, 2)).toBe(3);
    expect(Calculator.add(-1, -1)).toBe(-2);
    expect(Calculator.add(0, 0)).toBe(0);
});

test("Calculator subtract method", () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
    expect(Calculator.subtract(-1, -1)).toBe(0);
    expect(Calculator.subtract(0, 0)).toBe(0);
}
);

test("Calculator multiply method", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
    expect(Calculator.multiply(-1, -1)).toBe(1);
    expect(Calculator.multiply(0, 5)).toBe(0);
}
);

test("Calculator divide method", () => {
    expect(Calculator.divide(6, 3)).toBe(2);
    expect(Calculator.divide(-6, -3)).toBe(2);
    expect(Calculator.divide(0, 5)).toBe(0);
}
);
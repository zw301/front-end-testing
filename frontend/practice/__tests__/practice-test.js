import { sum, screamify, quietfy } from "../practice.js";

describe("practice function", () => {
  test("sum adds two numbers together", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  test("screamify should turn the string into an uppercase string", () => {
    expect(screamify("hello")).toEqual("HELLO");
  });

  test("quietfy should turn the string into an lowerCase string", () => {
    expect(quietfy("Hello")).toEqual("hello");
  });

});

import fizzbuzz from "./fizzbuzz";

describe("es fizzbuzz", () => {
  it("deberia retornar 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("deberia retornar 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
  it("deberia retornar fizz", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("deberia retornar 4", () => {
    expect(fizzbuzz(4)).toEqual(4);
  });
  it("deberia retornar Buzz", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("deberia retornar Fizz", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  it("deberia retornar 7", () => {
    expect(fizzbuzz(7)).toEqual(7);
  });
  it("deberia retornar 8", () => {
    expect(fizzbuzz(8)).toEqual(8);
  });
  it("deberia retornar fizz", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it("deberia retornar buzz", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  it("deberia retornar FizzBuzz", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

});

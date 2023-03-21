import fizzbuzz from "./fizzbuzz";

describe("es fizzbuzz", () => {
  it("deberia retornar 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("deberia retornar 2", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
});

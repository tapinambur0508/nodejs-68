const sum = require("./sum");

describe("sum", () => {
  it("1 + 2 should return 3", () => {
    const result = sum(1, 2); // Act
    expect(result).toBe(3)
  });

  test("1 + (-2) should return -1", () => {
    const result = sum(1, -2); // Act
    expect(result).toBe(-1); // Assert
  });

  test('"1" + (-2) should return -1', () => {
    const result = sum("1", -2); // Act
    expect(result).toBe(-1); // Assert
  });
});

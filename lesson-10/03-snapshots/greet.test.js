const greet = require("./greet");

describe("greet", () => {
  it("should return Hello World!", () => {
    const result = greet();
    // expect(result).toMatchSnapshot();
    expect(result).toMatchInlineSnapshot(`"Hello World!"`);
  });
});

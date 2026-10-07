const { add, subtract } = require("./calculator");

test("Add two numbers", () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});

test("Subtract two numbers", () => {
  const result = subtract(5, 3);

  expect(result).toBe(2);
});

import { add } from "./add";

describe("add", () => {
  test("正しく足し算ができる", () => {
    expect(add(1, 2)).toBe(3);
  });
});

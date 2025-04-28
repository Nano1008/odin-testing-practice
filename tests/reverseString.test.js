import { reverseString } from "../reverseString.js";

test("reverseString hello", () => {
    expect(reverseString("hello")).toBe("olleh");
});
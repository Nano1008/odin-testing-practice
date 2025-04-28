import { capitalize } from "../capitalize.js";

test("capitalize apple", () => {
    expect(capitalize("apple")).toBe("Apple");
})
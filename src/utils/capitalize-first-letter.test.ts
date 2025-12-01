import capitalizeFirstLetter from "./capitalize-first-letter.ts";

describe("capitalizeFirstLetter should", () => {
  it("return the input string with the first letter capitalized", () => {
    const string = "test string.";

    const result = capitalizeFirstLetter(string);

    expect(result).toBe("Test string.");
  });
});

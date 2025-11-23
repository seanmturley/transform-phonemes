import {
  formatQuotes,
  removeApostrophes
} from "./format-quotes-and-apostrophes.ts";
import { singleQuotePlaceholder } from "./regex.ts";

type TestDatum = {
  description: string;
  input: string;
  output: string;
};

const quoteStyles: TestDatum[] = [
  {
    description: "Straight double quotes primary with single quotes secondary",
    input: `"Stréjt dábel kwowts prajmerij wið 'singgel kwowts' sékenderij, and epostrefijz te rimuwv: ''tiz ðe bojz' kat's brásh'."`,
    output: `“Stréjt dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘${singleQuotePlaceholder}tiz ðe bojz${singleQuotePlaceholder} kat${singleQuotePlaceholder}s brásh’.”`
  },
  {
    description: "Straight single quotes primary with double quotes secondary",
    input: `'Stréjt singgel kwowts prajmerij wið "dábel kwowts" sékenderij, and epostrefijz te rimuwv: "'tiz ðe bojz' kat's brásh".'`,
    output: `“Stréjt singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘${singleQuotePlaceholder}tiz ðe bojz${singleQuotePlaceholder} kat${singleQuotePlaceholder}s brásh’.”`
  },
  {
    description: "Curvy double quotes primary with single quotes secondary",
    input: `“Keervij dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘’tiz ðe bojz’ kat’s brásh’.”`,
    output: `“Keervij dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘${singleQuotePlaceholder}tiz ðe bojz${singleQuotePlaceholder} kat${singleQuotePlaceholder}s brásh’.”`
  },
  {
    description: "Curvy single quotes primary with double quotes secondary",
    input: `‘Keervij singgel kwowts prajmerij wið “dábel kwowts” sékenderij, and epostrefijz te rimuwv: “’tiz ðe bojz’ kat’s brásh”.’`,
    output: `“Keervij singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘${singleQuotePlaceholder}tiz ðe bojz${singleQuotePlaceholder} kat${singleQuotePlaceholder}s brásh’.”`
  }
];

describe("formatQuotes should produce primary curvy double quotes and secondary curvy single quotes", () => {
  quoteStyles.forEach((testCase) => {
    it(`${testCase.description}`, () => {
      const result = formatQuotes(testCase.input);
      expect(result).toBe(testCase.output);
    });
  });
});

const apostrophes: TestDatum = {
  description: "Straight apostrophes",
  input: `“Epostrefijz te rimuwv: ‘${singleQuotePlaceholder}tiz ðe bojz${singleQuotePlaceholder} kat${singleQuotePlaceholder}s brásh’.”`,
  output: `“Epostrefijz te rimuwv: ‘tiz ðe bojz kats brásh’.”`
};

describe("removeApostrophes should", () => {
  it("remove all singleQuotePlaceholders", () => {
    const result = removeApostrophes(apostrophes.input);
    expect(result).toBe(apostrophes.output);
  });
});

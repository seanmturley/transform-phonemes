import {
  removeApostrophes,
  standardizeQuotes
} from "./format-quotes-and-apostrophes.ts";

type TestDatum = {
  description: string;
  input: string;
  output: string;
};

const quotes: TestDatum[] = [
  {
    description: "Straight double quotes primary with single quotes secondary",
    input: `"Stréjt dábel kwowts prajmerij wið 'singgel kwowts' sékenderij, and epostrefijz te rimuwv: ''tiz ðe bojz' kat's brásh'."`,
    output: `“Stréjt dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘'tiz ðe bojz' kat's brásh’.”`
  },
  {
    description: "Straight single quotes primary with double quotes secondary",
    input: `'Stréjt singgel kwowts prajmerij wið "dábel kwowts" sékenderij, and epostrefijz te rimuwv: "'tiz ðe bojz' kat's brásh".'`,
    output: `“Stréjt singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘'tiz ðe bojz' kat's brásh’.”`
  },
  {
    description: "Curvy double quotes primary with single quotes secondary",
    input: `“Keervij dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘’tiz ðe bojz’ kat’s brásh’.”`,
    output: `“Keervij dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘’tiz ðe bojz’ kat’s brásh’.”`
  },
  {
    description: "Curvy single quotes primary with double quotes secondary",
    input: `‘Keervij singgel kwowts prajmerij wið “dábel kwowts” sékenderij, and epostrefijz te rimuwv: “’tiz ðe bojz’ kat’s brásh”.’`,
    output: `“Keervij singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘’tiz ðe bojz’ kat’s brásh’.”`
  }
];

const apostrophes: TestDatum[] = [
  {
    description: "Straight apostrophes",
    input: `“Stréjt dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘'tiz ðe bojz' kat's brásh’.”`,
    output: `“Stréjt dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘tiz ðe bojz kats brásh’.”`
  },
  {
    description: "Curvy apostrophes",
    input: `“Keervij singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘’tiz ðe bojz’ kat’s brásh’.”`,
    output: `“Keervij singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘tiz ðe bojz kats brásh’.”`
  }
];

describe("Quotes should be standardized as curvy double quotes primary with single quotes secondary", () => {
  quotes.forEach((testCase) => {
    it(`${testCase.description}`, () => {
      const result = standardizeQuotes(testCase.input);
      expect(result).toBe(testCase.output);
    });
  });
});

describe("Apostrophes should be removed", () => {
  apostrophes.forEach((testCase) => {
    it(`${testCase.description}`, () => {
      const result = removeApostrophes(testCase.input);
      expect(result).toBe(testCase.output);
    });
  });
});

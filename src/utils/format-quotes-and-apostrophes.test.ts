import formatQuotesAndApostrophes from "./format-quotes-and-apostrophes.ts";

type QuotesAndApostrophesTestDatum = {
  description: string;
  input: string;
  output: string;
};

const quotesAndApostrophes: QuotesAndApostrophesTestDatum[] = [
  {
    description: "Straight double quotes primary with single quotes secondary",
    input: `"Streɪt dʌbəl kwəʊts praɪməri wɪð 'sɪŋgəl kwəʊts' sɛkəndəri, ənd əpɒstrəfiz tə rɪmuːv: ''tɪz ðə bɔɪz' kæt's brʌʃ'."`,
    output: `“Stréjt dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘tiz ðe bojz kats brásh’.”`
  },
  {
    description: "Straight single quotes primary with double quotes secondary",
    input: `'Streɪt sɪŋgəl kwəʊts praɪməri wɪð "dʌbəl kwəʊts" sɛkəndəri, ənd əpɒstrəfiz tə rɪmuːv: "'tɪz ðə bɔɪz' kæt's brʌʃ".'`,
    output: `“Stréjt singgel kwowts prajmerij wið ‘dábel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘tiz ðe bojz kats brásh’.”`
  },
  {
    description: "Curvy double quotes primary with single quotes secondary",
    input: `“Kɜːrvi dʌbəl kwəʊts praɪməri wɪð ‘sɪŋgəl kwəʊts’ sɛkəndəri, ənd əpɒstrəfiz tə rɪmuːv: ‘’tɪz ðə bɔɪz’ kæt’s brʌʃ’.”`,
    output: `“Keervij dábel kwowts prajmerij wið ‘singgel kwowts’ sékenderij, and epostrefijz te rimuwv: ‘tiz ðe bojz kats brásh’.”`
  },
  {
    description: "Curvy single quotes primary with double quotes secondary",
    input: `‘Kɜːrvi sɪŋgəl kwəʊts praɪməri wɪð “dʌbəl kwəʊts” sɛkəndəri, ənd əpɒstrəfiz tə rɪmuːv: “’tɪz ðə bɔɪz’ kæt’s brʌʃ”.’`,
    output: `“Kɜːrvi sɪŋgəl kwəʊts praɪməri wɪð ‘dʌbəl kwəʊts’ sɛkəndəri, ənd əpɒstrəfiz tə rɪmuːv: ‘tɪz ðə bɔɪz kæts brʌʃ’.”`
  }
];

describe("Quotes should be standardized as curvy double quotes primary with single quotes secondary, and apostrphes should be removed", () => {
  quotesAndApostrophes.forEach((testCase) => {
    it(`${testCase.description}`, () => {
      const result = formatQuotesAndApostrophes(testCase.input);
      expect(result).toBe(testCase.output);
    });
  });
});

// Test cases adapted from Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/English_phonology#Consonant_examples
// Vowels - https://en.wikipedia.org/wiki/English_phonology#Vowels

import map from "./map.ts";
import transliterateText from "../../transliterate/text.ts";
import type { TransliterationTestData } from "../../transliterate/types.ts";

const phonemes: TransliterationTestData = {
  // plosives
  p: { ipa: "pɪt", transliteration: "pit", word: "pit" },
  b: { ipa: "bɪt", transliteration: "bit", word: "bit" },
  t: { ipa: "tɪn", transliteration: "tin", word: "tin" },
  d: { ipa: "dɪn", transliteration: "din", word: "din" },
  k: { ipa: "kʌt", transliteration: "kát", word: "cut" },
  ɡ: { ipa: "gʌt", transliteration: "gát", word: "gut" },
  tʃ: { ipa: "tʃiːp", transliteration: "cijp", word: "cheap" },
  dʒ: { ipa: "dʒiːp", transliteration: "dgijp", word: "jeep" },

  // fricatives
  f: { ipa: "fæt", transliteration: "fat", word: "fat" },
  v: { ipa: "væt", transliteration: "vat", word: "vat" },
  θ: { ipa: "θaɪ", transliteration: "þaj", word: "thigh" },
  ð: { ipa: "ðaɪ", transliteration: "ðaj", word: "thy" },
  s: { ipa: "sæp", transliteration: "sap", word: "sap" },
  z: { ipa: "zæp", transliteration: "zap", word: "zap" },
  ʃ: { ipa: "ʃɪn", transliteration: "shin", word: "shin" },
  ʒ: { ipa: "beɪʒ", transliteration: "béjzh", word: "beige" },
  x: { ipa: "lɒx", transliteration: "loch", word: "loch" },
  // ʍ: { ipa: "ʍɒt", transliteration: "whot", word: "what" }, // archaic
  h: { ipa: "hæm", transliteration: "ham", word: "ham" },

  // nasals
  m: { ipa: "rʌm", transliteration: "rám", word: "rum" },
  n: { ipa: "rʌn", transliteration: "rán", word: "run" },
  ŋ: { ipa: "rʌŋ", transliteration: "ráng", word: "rung" },

  // approximants
  j: { ipa: "jɔːr", transliteration: "jor", word: "your" },
  w: { ipa: "wɔːr", transliteration: "wor", word: "wore" },
  r: { ipa: "rʌmp", transliteration: "rámp", word: "rump" },
  l: { ipa: "lʌmp", transliteration: "lámp", word: "lump" },

  // short vowels
  ɪ: { ipa: "kɪt", transliteration: "kit", word: "kit" },
  ɛ: { ipa: "drɛs", transliteration: "drés", word: "dress" },
  ɒ: { ipa: "lɒt", transliteration: "lot", word: "lot" },
  æ: { ipa: "træp", transliteration: "trap", word: "trap" },
  ʊ: { ipa: "fʊt", transliteration: "fut", word: "foot" },
  ə: { ipa: "kɒmə", transliteration: "kome", word: "comma" },
  ʌ: { ipa: "strʌt", transliteration: "strát", word: "strut" },

  // short vowels with -r
  ɪr: { ipa: "spɪrɪt", transliteration: "spirrit", word: "spirit" },
  ɛr: { ipa: "vɛri", transliteration: "vérrij", word: "very" },
  ɒr: { ipa: "sɒri", transliteration: "sorrij", word: "sorry" },
  ær: { ipa: "kæri", transliteration: "karrij", word: "carry" },
  ʊr: { ipa: "kʊriər", transliteration: "kurrijer", word: "courier" },
  ər: { ipa: "ʌðər", transliteration: "áðer", word: "other" },
  ʌr: { ipa: "wʌri", transliteration: "wárij", word: "worry" },

  // long r-liaison vowels with -r
  ɪər: { ipa: "nɪər", transliteration: "nir", word: "near" },
  eər: { ipa: "skweər", transliteration: "skwér", word: "square" },
  ɔːr: { ipa: "nɔːrθ", transliteration: "norþ", word: "north" },
  ɑːr: { ipa: "stɑːrt", transliteration: "start", word: "start" },
  ʊər: { ipa: "pjʊər", transliteration: "pjur", word: "pure" },
  ɜːr: { ipa: "nɜːrs", transliteration: "neers", word: "nurse" },

  // long r-liaison vowels without -r
  ɪə: { ipa: "aɪdɪə", transliteration: "ajdii", word: "idea" },
  // eə: { ipa: "skweər", transliteration: "skwér", word: "square" },
  ɔː: { ipa: "ɔːl", transliteration: "ool", word: "all" },
  ɑː: { ipa: "ɑːftər", transliteration: "aafter", word: "after" },
  // ʊə: { ipa: "pjʊər", transliteration: "pjur", word: "pure" },
  ɜː: { ipa: "fɜːn", transliteration: "feen", word: "foehn" },

  // j-diphthongs
  iː: { ipa: "fliːs", transliteration: "flijs", word: "fleece" },
  eɪ: { ipa: "feɪs", transliteration: "féjs", word: "face" },
  ɔɪ: { ipa: "tʃɔɪs", transliteration: "cojs", word: "choice" },
  aɪ: { ipa: "praɪs", transliteration: "prajs", word: "price" },

  // w-diphthongs
  əʊ: { ipa: "gəʊt", transliteration: "gowt", word: "goat" },
  aʊ: { ipa: "maʊθ", transliteration: "mawþ", word: "mouth" },
  uː: { ipa: "guːs", transliteration: "guws", word: "goose" }
};

const capitalizedPhonemes: TransliterationTestData = {
  // Note that some phonemes don't occur word initially and thus
  // will not be capitalized in normal sentence or title case.

  // plosives
  p: { ipa: "Pɪt", transliteration: "Pit", word: "Pit" },
  b: { ipa: "Bɪt", transliteration: "Bit", word: "Bit" },
  t: { ipa: "Tɪn", transliteration: "Tin", word: "Tin" },
  d: { ipa: "Dɪn", transliteration: "Din", word: "Din" },
  k: { ipa: "Kʌt", transliteration: "Kát", word: "Cut" },
  ɡ: { ipa: "Gʌt", transliteration: "Gát", word: "Gut" },
  tʃ: { ipa: "Tʃiːp", transliteration: "Cijp", word: "Cheap" },
  dʒ: { ipa: "Dʒiːp", transliteration: "Dgijp", word: "Jeep" },

  // fricatives
  f: { ipa: "Fæt", transliteration: "Fat", word: "Fat" },
  v: { ipa: "Væt", transliteration: "Vat", word: "Vat" },
  θ: { ipa: "Θaɪ", transliteration: "Þaj", word: "Thigh" },
  ð: { ipa: "Ðaɪ", transliteration: "Ðaj", word: "Thy" },
  s: { ipa: "Sæp", transliteration: "Sap", word: "Sap" },
  z: { ipa: "Zæp", transliteration: "Zap", word: "Zap" },
  ʃ: { ipa: "Ʃɪn", transliteration: "Shin", word: "Shin" },
  ʒ: { ipa: "Ʒɒnrə", transliteration: "Zhonre", word: "Genre" },
  // x: { ipa: "lɒx", transliteration: "loch", word: "loch" },
  // ʍ: { ipa: "ʍɒt", transliteration: "whot", word: "what" }, // archaic
  h: { ipa: "Hæm", transliteration: "Ham", word: "Ham" },

  // nasals
  m: { ipa: "Mʌm", transliteration: "Mám", word: "Mum" },
  n: { ipa: "Nʌn", transliteration: "Nán", word: "Nun" },
  // ŋ: { ipa: "rʌŋ", transliteration: "ráng", word: "rung" },

  // approximants
  j: { ipa: "Jɔːr", transliteration: "Jor", word: "Your" },
  w: { ipa: "Wɔːr", transliteration: "Wor", word: "Wore" },
  r: { ipa: "Rʌmp", transliteration: "Rámp", word: "Rump" },
  l: { ipa: "Lʌmp", transliteration: "Lámp", word: "Lump" },

  // short vowels
  ɪ: { ipa: "Ɪt", transliteration: "It", word: "It" },
  ɛ: { ipa: "Ɛdʒ", transliteration: "Édg", word: "Edge" },
  ɒ: { ipa: "Ɒn", transliteration: "On", word: "On" },
  æ: { ipa: "Æz", transliteration: "Az", word: "As" },
  // ʊ: { ipa: "Uːps", transliteration: "Ups", word: "Oops" },
  ə: { ipa: "Əbaʊt", transliteration: "Ebawt", word: "About" },
  ʌ: { ipa: "Ʌs", transliteration: "Ás", word: "Us" },

  // short vowels with -r
  ɪr: { ipa: "Ɪreɪz", transliteration: "Irréjz", word: "Erase" },
  ɛr: { ipa: "Ɛrər", transliteration: "Érrer", word: "Error" },
  ɒr: { ipa: "Ɒrɪndʒ", transliteration: "Orrindg", word: "Orange" },
  ær: { ipa: "Ærəʊ", transliteration: "Arrow", word: "Arrow" },
  // ʊr: { ipa: "kʊriər", transliteration: "kurrijer", word: "courier" },
  ər: { ipa: "Əraʊnd", transliteration: "Erawnd", word: "Around" },
  // ʌr: { ipa: "wʌri", transliteration: "wárij", word: "worry" },

  // long r-liaison vowels with -r
  ɪər: { ipa: "Ɪər", transliteration: "Ir", word: "Ear" },
  eər: { ipa: "Eər", transliteration: "Ér", word: "Air" },
  ɔːr: { ipa: "Ɔːr", transliteration: "Or", word: "Or" },
  ɑːr: { ipa: "Ɑːr", transliteration: "Ar", word: "Are" },
  // ʊər: { ipa: "pjʊər", transliteration: "pjur", word: "pure" },
  ɜːr: { ipa: "Ɜːrθ", transliteration: "Eerþ", word: "Earth" },

  // long r-liaison vowels without -r
  // ɪə: { ipa: "aɪdɪə", transliteration: "ajdii", word: "idea" },
  // eə: { ipa: "skweər", transliteration: "skwér", word: "square" },
  ɔː: { ipa: "Ɔːl", transliteration: "Ool", word: "All" },
  ɑː: { ipa: "Ɑːftər", transliteration: "Aafter", word: "After" },
  // ʊə: { ipa: "pjʊər", transliteration: "pjur", word: "pure" },
  // ɜː: { ipa: "fɜːn", transliteration: "feen", word: "foehn" },

  // j-diphthongs
  iː: { ipa: "Iːst", transliteration: "Ijst", word: "East" },
  eɪ: { ipa: "Eɪt", transliteration: "Éjt", word: "Eight" },
  ɔɪ: { ipa: "Ɔɪl", transliteration: "Ojl", word: "Oil" },
  aɪ: { ipa: "Aɪs", transliteration: "Ajs", word: "Ice" },

  // w-diphthongs
  əʊ: { ipa: "Əʊld", transliteration: "Owld", word: "Old" },
  aʊ: { ipa: "Aʊt", transliteration: "Awt", word: "Out" },
  uː: { ipa: "Uːz", transliteration: "Uwz", word: "Ooze" }
};

const westGermanicConsonantDigraphs: TransliterationTestData = {
  dg: { ipa: "mʌdgɑːrd", transliteration: "mád-gard", word: "mudgaurd" },
  sh: { ipa: "haʊshəʊld", transliteration: "haws-howld", word: "household" },
  zh: { ipa: "ræmzhɔːrn", transliteration: "ramz-horn", word: "ramshorn" },
  tʃh: { ipa: "hɪtʃhaɪkər", transliteration: "hic-hajker", word: "hitchhiker" },
  ng: { ipa: "ɒngəʊɪŋ", transliteration: "on-gowing", word: "ongoing" }
};

describe("transliterateText", () => {
  describe("generally should", () => {
    describe("transliterate all phonemes", () => {
      for (const [key, value] of Object.entries(phonemes)) {
        it(`${key}`, () => {
          const result = transliterateText(value.ipa, map);

          expect(result).toBe(value.transliteration);
        });
      }
    });

    describe("transliterate all capitalized phonemes", () => {
      for (const [key, value] of Object.entries(capitalizedPhonemes)) {
        it(`${key}`, () => {
          const result = transliterateText(value.ipa, map);

          expect(result).toBe(value.transliteration);
        });
      }
    });

    //   //   it("return punctuation unchanged", () => {
    //   //     // This tests a non-exhaustive list, but covers many common
    //   //     // symbols - in theory all punctuation is covered by the
    //   //     // Unicode punctuation character class
    //   //     const result = transliterateWord(`.,':;-?!«»‹›“”‘’"''()`, "M");

    //   //     expect(result).toBe(`.,':;-?!«»‹›“”‘’"''()`);
    //   //   });

    //   //   it("return numerals unchanged", () => {
    //   //     const result = transliterateWord("0123456789", "Y");

    //   //     expect(result).toBe("0123456789");
    //   //   });
  });

  describe("exceptionally (based on a list of exceptions) should", () => {
    it("transliterate 't' & 'ʃ' as separate consonants", () => {
      const word = "swɛtʃɜːrt"; // sweatshirt
      const result = transliterateText(word, map);
      expect(result).toBe("swétsheert");
    });
  });

  describe("should hyphenate ambiguous West Germanic consonant pairs", () => {
    for (const [key, value] of Object.entries(westGermanicConsonantDigraphs)) {
      it(`${key}`, () => {
        const result = transliterateText(value.ipa, map);

        expect(result).toBe(value.transliteration);
      });
    }
  });

  describe("should render stressed forms of the words", () => {
    it("of", () => {
      const example = "Əv prəvaɪdərz əv"; // Of providers of
      const result = transliterateText(example, map);
      expect(result).toBe("Ov prevajders ov");
    });
  });
});

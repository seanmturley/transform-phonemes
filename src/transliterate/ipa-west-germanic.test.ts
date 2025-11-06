// Test cases adapted from Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/English_phonology#Consonant_examples
// Vowels - https://en.wikipedia.org/wiki/English_phonology#Vowels

import map from "../lib/ipa-west-germanic.ts";
import transliterateText from "./text.ts";
import type { TransliterationTestData } from "./types.ts";

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

describe("transliterateText", () => {
  describe("should transliterate all phonemes", () => {
    for (const [key, value] of Object.entries(phonemes)) {
      it(`${key}`, () => {
        const result = transliterateText(value.ipa, map);

        expect(result).toBe(value.transliteration);
      });
    }
  });

  //   it("should return punctuation unchanged", () => {
  //     // This tests a non-exhaustive list, but covers many common
  //     // symbols - in theory all punctuation is covered by the
  //     // Unicode punctuation character class
  //     const result = transliterateWord(`.,':;-?!«»‹›“”‘’"''()`, "M");

  //     expect(result).toBe(`.,':;-?!«»‹›“”‘’"''()`);
  //   });

  //   it("should return numerals unchanged", () => {
  //     const result = transliterateWord("0123456789", "Y");

  //     expect(result).toBe("0123456789");
  //   });
});

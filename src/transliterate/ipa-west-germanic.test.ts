// Test cases adapted from Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/English_phonology#Consonant_examples
// Vowels - https://en.wikipedia.org/wiki/English_phonology#Vowels

// import transliterateWord from "./word.ts";
import type { TransliterationTestData } from "./types.ts";

const phonemes: TransliterationTestData = {
  // plosives
  p: { ipa: "pɪt", transliteration: "pit", word: "pit" },
  b: { ipa: "bɪt", transliteration: "bit", word: "bit" },
  t: { ipa: "tɪn", transliteration: "tin", word: "tin" },
  d: { ipa: "dɪn", transliteration: "din", word: "din" },
  k: { ipa: "kʌt", transliteration: "kát", word: "cut" },
  ɡ: { ipa: "gʌt", transliteration: "gát", word: "gut" },
  // fricatives
  tʃ: { ipa: "tʃiːp", transliteration: "cíjp", word: "cheap" },
  dʒ: { ipa: "dʒiːp", transliteration: "dgijp", word: "jeep" },
  f: { ipa: "fæt", transliteration: "fat", word: "fat" },
  v: { ipa: "væt", transliteration: "vat", word: "vat" },
  θ: { ipa: "θaɪ", transliteration: "þaj", word: "thigh" },
  ð: { ipa: "ðaɪ", transliteration: "ðaj", word: "thy" },
  s: { ipa: "sæp", transliteration: "sap", word: "sap" },
  z: { ipa: "zæp", transliteration: "zap", word: "zap" },
  ʃ: { ipa: "ʃɪn", transliteration: "shin", word: "shin" },
  ʒ: { ipa: "beɪʒ", transliteration: "béjzh", word: "beige" },
  x: { ipa: "lɒx", transliteration: "loch", word: "loch" },
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
  // short-lax vowels
  ɪ: { ipa: "kɪt", transliteration: "kit", word: "kit" },
  ɛ: { ipa: "drɛs", transliteration: "drés", word: "dress" },
  ɒ: { ipa: "lɒt", transliteration: "lot", word: "lot" },
  æ: { ipa: "træp", transliteration: "trap", word: "trap" },
  ʊ: { ipa: "fʊt", transliteration: "fut", word: "foot" },
  ə: { ipa: "kɒmə", transliteration: "kome", word: "comma" },
  ʌ: { ipa: "strʌt", transliteration: "strát", word: "strut" },
  // long r-liaison vowels
  ɪə: { ipa: "nɪər", transliteration: "nir", word: "near" },
  eə: { ipa: "skweər", transliteration: "skwér", word: "square" },
  ɔː: { ipa: "nɔːrθ", transliteration: "norþ", word: "north" },
  ɑː: { ipa: "stɑːrt", transliteration: "start", word: "start" },
  ʊə: { ipa: "pjʊər", transliteration: "pjur", word: "pure" },
  ɜː: { ipa: "nɜːrs", transliteration: "neers", word: "nurse" },
  // long j-diphthongs
  iː: { ipa: "fliːs", transliteration: "flijs", word: "fleece" },
  eɪ: { ipa: "feɪs", transliteration: "féjs", word: "face" },
  ʃɔɪ: { ipa: "tʃɔɪs", transliteration: "cojs", word: "choice" },
  aɪ: { ipa: "praɪs", transliteration: "prajs", word: "price" },
  // long w-diphthongs
  əʊ: { ipa: "gəʊt", transliteration: "gowt", word: "goat" },
  aʊ: { ipa: "maʊθ", transliteration: "mawþ", word: "mouth" },
  uː: { ipa: "guːs", transliteration: "guws", word: "goose" }
};

// describe("transliterateWord", () => {
//   describe("should transliterate all phonemes", () => {
//     for (const phoneme in phonemes) {
//       const currentPhoneme = phonemes[phoneme];
//       it(`${currentPhoneme.word}`, () => {
//         const result = transliterateWord(
//           currentPhoneme.word,
//           currentPhoneme.pos ?? ""
//         );

//         expect(result).toBe(currentPhoneme.ipa);
//       });
//     }
//   });

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
// });

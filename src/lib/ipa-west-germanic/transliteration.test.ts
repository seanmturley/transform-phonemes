// Test cases adapted from Wikipedia example words for:
// Consonants - https://en.wikipedia.org/wiki/English_phonology#Consonant_examples
// Vowels - https://en.wikipedia.org/wiki/English_phonology#Vowels

import map from "./map.ts";
import transliterateText from "../../transliterate/text.ts";
import type { TransliterationTestData } from "../../transliterate/types.ts";

const phonemes: TransliterationTestData = {
  // plosives
  p: { description: "pit", input: "pɪt", output: "pit" },
  b: { description: "bit", input: "bɪt", output: "bit" },
  t: { description: "tin", input: "tɪn", output: "tin" },
  d: { description: "din", input: "dɪn", output: "din" },
  k: { description: "cut", input: "kʌt", output: "kát" },
  ɡ: { description: "gut", input: "gʌt", output: "gát" },
  tʃ: { description: "cheap", input: "tʃiːp", output: "cijp" },
  dʒ: { description: "jeep", input: "dʒiːp", output: "dgijp" },

  // fricatives
  f: { description: "fat", input: "fæt", output: "fat" },
  v: { description: "vat", input: "væt", output: "vat" },
  θ: { description: "thigh", input: "θaɪ", output: "þaj" },
  ð: { description: "thy", input: "ðaɪ", output: "ðaj" },
  s: { description: "sap", input: "sæp", output: "sap" },
  z: { description: "zap", input: "zæp", output: "zap" },
  ʃ: { description: "shin", input: "ʃɪn", output: "shin" },
  ʒ: { description: "beige", input: "beɪʒ", output: "béjzh" },
  x: { description: "loch", input: "lɒx", output: "loch" },
  // ʍ: { description: "what", input: "ʍɒt", output: "whot" }, // archaic
  h: { description: "ham", input: "hæm", output: "ham" },

  // nasals
  m: { description: "rum", input: "rʌm", output: "rám" },
  n: { description: "run", input: "rʌn", output: "rán" },
  ŋ: { description: "rung", input: "rʌŋ", output: "ráng" },

  // approximants
  j: { description: "your", input: "jɔːr", output: "jor" },
  w: { description: "wore", input: "wɔːr", output: "wor" },
  r: { description: "rump", input: "rʌmp", output: "rámp" },
  l: { description: "lump", input: "lʌmp", output: "lámp" },

  // short vowels
  ɪ: { description: "kit", input: "kɪt", output: "kit" },
  ɛ: { description: "dress", input: "drɛs", output: "drés" },
  ɒ: { description: "lot", input: "lɒt", output: "lot" },
  æ: { description: "trap", input: "træp", output: "trap" },
  ʊ: { description: "foot", input: "fʊt", output: "fut" },
  ə: { description: "comma", input: "kɒmə", output: "kome" },
  ʌ: { description: "strut", input: "strʌt", output: "strát" },

  // short vowels with -r
  ɪr: { description: "spirit", input: "spɪrɪt", output: "spirrit" },
  ɛr: { description: "very", input: "vɛri", output: "vérrij" },
  ɒr: { description: "sorry", input: "sɒri", output: "sorrij" },
  ær: { description: "carry", input: "kæri", output: "karrij" },
  ʊr: { description: "courier", input: "kʊriər", output: "kurrijer" },
  ər: { description: "other", input: "ʌðər", output: "áðer" },
  ʌr: { description: "worry", input: "wʌri", output: "wárij" },

  // long r-liaison vowels with -r
  ɪər: { description: "near", input: "nɪər", output: "nir" },
  eər: { description: "square", input: "skweər", output: "skwér" },
  ɔːr: { description: "north", input: "nɔːrθ", output: "norþ" },
  ɑːr: { description: "start", input: "stɑːrt", output: "start" },
  ʊər: { description: "pure", input: "pjʊər", output: "pjur" },
  ɜːr: { description: "nurse", input: "nɜːrs", output: "neers" },

  // long r-liaison vowels without -r
  ɪə: { description: "idea", input: "aɪdɪə", output: "ajdii" },
  // eə: { description: "square", input: "skweər", output: "skwér" },
  ɔː: { description: "all", input: "ɔːl", output: "ool" },
  ɑː: { description: "after", input: "ɑːftər", output: "aafter" },
  // ʊə: { description: "pure", input: "pjʊər", output: "pjur" },
  ɜː: { description: "foehn", input: "fɜːn", output: "feen" },

  // j-diphthongs
  iː: { description: "fleece", input: "fliːs", output: "flijs" },
  eɪ: { description: "face", input: "feɪs", output: "féjs" },
  ɔɪ: { description: "choice", input: "tʃɔɪs", output: "cojs" },
  aɪ: { description: "price", input: "praɪs", output: "prajs" },

  // w-diphthongs
  əʊ: { description: "goat", input: "gəʊt", output: "gowt" },
  aʊ: { description: "mouth", input: "maʊθ", output: "mawþ" },
  uː: { description: "goose", input: "guːs", output: "guws" }
};

const capitalizedPhonemes: TransliterationTestData = {
  // Note that some phonemes don't occur word initially and thus
  // will not be capitalized in normal sentence or title case.

  // plosives
  p: { description: "Pit", input: "Pɪt", output: "Pit" },
  b: { description: "Bit", input: "Bɪt", output: "Bit" },
  t: { description: "Tin", input: "Tɪn", output: "Tin" },
  d: { description: "Din", input: "Dɪn", output: "Din" },
  k: { description: "Cut", input: "Kʌt", output: "Kát" },
  ɡ: { description: "Gut", input: "Gʌt", output: "Gát" },
  tʃ: { description: "Cheap", input: "Tʃiːp", output: "Cijp" },
  dʒ: { description: "Jeep", input: "Dʒiːp", output: "Dgijp" },

  // fricatives
  f: { description: "Fat", input: "Fæt", output: "Fat" },
  v: { description: "Vat", input: "Væt", output: "Vat" },
  θ: { description: "Thigh", input: "Θaɪ", output: "Þaj" },
  ð: { description: "Thy", input: "Ðaɪ", output: "Ðaj" },
  s: { description: "Sap", input: "Sæp", output: "Sap" },
  z: { description: "Zap", input: "Zæp", output: "Zap" },
  ʃ: { description: "Shin", input: "Ʃɪn", output: "Shin" },
  ʒ: { description: "Genre", input: "Ʒɒnrə", output: "Zhonre" },
  // x: { description: "loch", input: "lɒx", output: "loch" },
  // ʍ: { description: "what", input: "ʍɒt", output: "whot" }, // archaic
  h: { description: "Ham", input: "Hæm", output: "Ham" },

  // nasals
  m: { description: "Mum", input: "Mʌm", output: "Mám" },
  n: { description: "Nun", input: "Nʌn", output: "Nán" },
  // ŋ: { description: "rung", input: "rʌŋ", output: "ráng" },

  // approximants
  j: { description: "Your", input: "Jɔːr", output: "Jor" },
  w: { description: "Wore", input: "Wɔːr", output: "Wor" },
  r: { description: "Rump", input: "Rʌmp", output: "Rámp" },
  l: { description: "Lump", input: "Lʌmp", output: "Lámp" },

  // short vowels
  ɪ: { description: "It", input: "Ɪt", output: "It" },
  ɛ: { description: "Edge", input: "Ɛdʒ", output: "Édg" },
  ɒ: { description: "On", input: "Ɒn", output: "On" },
  æ: { description: "As", input: "Æz", output: "Az" },
  // ʊ: { description: "Oops", input: "Uːps", output: "Ups" },
  ə: { description: "About", input: "Əbaʊt", output: "Ebawt" },
  ʌ: { description: "Us", input: "Ʌs", output: "Ás" },

  // short vowels with -r
  ɪr: { description: "Erase", input: "Ɪreɪz", output: "Irréjz" },
  ɛr: { description: "Error", input: "Ɛrər", output: "Érrer" },
  ɒr: { description: "Orange", input: "Ɒrɪndʒ", output: "Orrindg" },
  ær: { description: "Arrow", input: "Ærəʊ", output: "Arrow" },
  // ʊr: { description: "courier", input: "kʊriər", output: "kurrijer" },
  ər: { description: "Around", input: "Əraʊnd", output: "Erawnd" },
  // ʌr: { description: "worry", input: "wʌri", output: "wárij" },

  // long r-liaison vowels with -r
  ɪər: { description: "Ear", input: "Ɪər", output: "Ir" },
  eər: { description: "Air", input: "Eər", output: "Ér" },
  ɔːr: { description: "Or", input: "Ɔːr", output: "Or" },
  ɑːr: { description: "Are", input: "Ɑːr", output: "Ar" },
  // ʊər: { description: "pure", input: "pjʊər", output: "pjur" },
  ɜːr: { description: "Earth", input: "Ɜːrθ", output: "Eerþ" },

  // long r-liaison vowels without -r
  // ɪə: { description: "idea", input: "aɪdɪə", output: "ajdii" },
  // eə: { description: "square", input: "skweər", output: "skwér" },
  ɔː: { description: "All", input: "Ɔːl", output: "Ool" },
  ɑː: { description: "After", input: "Ɑːftər", output: "Aafter" },
  // ʊə: { description: "pure", input: "pjʊər", output: "pjur" },
  // ɜː: { description: "foehn", input: "fɜːn", output: "feen" },

  // j-diphthongs
  iː: { description: "East", input: "Iːst", output: "Ijst" },
  eɪ: { description: "Eight", input: "Eɪt", output: "Éjt" },
  ɔɪ: { description: "Oil", input: "Ɔɪl", output: "Ojl" },
  aɪ: { description: "Ice", input: "Aɪs", output: "Ajs" },

  // w-diphthongs
  əʊ: { description: "Old", input: "Əʊld", output: "Owld" },
  aʊ: { description: "Out", input: "Aʊt", output: "Awt" },
  uː: { description: "Ooze", input: "Uːz", output: "Uwz" }
};

const westGermanicConsonantDigraphs: TransliterationTestData = {
  dg: { description: "mudgaurd", input: "mʌdgɑːrd", output: "mád-gard" },
  sh: { description: "household", input: "haʊshəʊld", output: "haws-howld" },
  zh: { description: "ramshorn", input: "ræmzhɔːrn", output: "ramz-horn" },
  tʃh: { description: "hitchhiker", input: "hɪtʃhaɪkər", output: "hic-hajker" },
  ng: { description: "ongoing", input: "ɒngəʊɪŋ", output: "on-gowing" }
};

describe("transliterateText", () => {
  describe("generally should", () => {
    describe("transliterate all phonemes", () => {
      for (const [key, value] of Object.entries(phonemes)) {
        it(`${key}`, () => {
          const result = transliterateText(value.input, map);

          expect(result).toBe(value.output);
        });
      }
    });

    describe("transliterate all capitalized phonemes", () => {
      for (const [key, value] of Object.entries(capitalizedPhonemes)) {
        it(`${key}`, () => {
          const result = transliterateText(value.input, map);

          expect(result).toBe(value.output);
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
        const result = transliterateText(value.input, map);

        expect(result).toBe(value.output);
      });
    }
  });

  describe("should render stressed forms of the words", () => {
    it("of", () => {
      const example = "Əv prəvaɪdərz əv"; // Of providers of
      const result = transliterateText(example, map);
      expect(result).toBe("Ov prevajderz ov");
    });

    it("and", () => {
      const example = "Ənd kəndɪʃənz ənd"; // And conditions and
      const result = transliterateText(example, map);
      expect(result).toBe("And kendishenz and");
    });
  });

  describe("should, when not followed by a consonant, render stressed forms of the words", () => {
    it("the", () => {
      const example = "Ðə ʌgli ənd ðə ænɪməl, Ðə bjuːti ənd ðə biːst";
      // The ugly and the animal, the beauty and the beast
      const result = transliterateText(example, map);
      expect(result).toBe("Ðij áglij and ðij animel, Ðe bjuwtij and ðe bijst");
    });

    it("to", () => {
      const example = "Tə ɑːsk ənd tə ɑːnsər, Tə siːk ənd tə faɪnd";
      // To ask and to answer, to seek and to find
      const result = transliterateText(example, map);
      expect(result).toBe("Tuw aask and tuw aanser, Te sijk and te fajnd");
    });

    it("into", () => {
      const example = "Ɪntuː ɒdz ənd ɪntuː ɛndz, Ɪntuː ðɪs ənd ɪntuː ðæt"; // Into odds and into ends, Into this and into that
      const result = transliterateText(example, map);
      expect(result).toBe("Intuw odz and intuw éndz, Inte ðis and inte ðat");
    });

    it("onto", () => {
      const example =
        "Ɒntuː ə bʌs ənd ɒntuː ə siːt, Ɒntuː ðə bʌs ənd ɒntuː ðə siːt"; // Onto a bus and onto a seat, Onto the bus and onto the seat
      const result = transliterateText(example, map);
      expect(result).toBe(
        "Ontuw e bás and ontuw e sijt, Onte ðe bás and onte ðe sijt"
      );
    });
  });

  describe("should process contractions to", () => {
    it("remove leading apostrophes", () => {
      const example = "'Tɪz 'kɔːz ɪt's 'geɪnst 'əm";
      // 'Tis 'cause it's 'gainst 'em
      const result = transliterateText(example, map);
      expect(result).toBe("Tiz kooz its géjnst em");
    });
  });
});

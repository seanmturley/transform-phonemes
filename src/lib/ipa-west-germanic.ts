import type { TransliterationMap } from "../transliterate/types.ts";

const map: TransliterationMap = {
  // Phonemes not requiring transliteration are commented out

  trigraphs: {
    ///////////////
    // VOWELS

    // long r-liaison with -r
    ɪər: "ir",
    eər: "ér",
    ɔːr: "or",
    ɑːr: "ar",
    ʊər: "ur",
    ɜːr: "eer"
  },

  digraphs: {
    // Digraphs are prioritized to minimize transliteration conflicts

    ///////////////
    // CONSONANTS

    // plosives
    tʃ: "c",
    dʒ: "dg",

    ///////////////
    // VOWELS

    // short with -r
    ɪr: "irr",
    ɛr: "érr",
    ɒr: "orr",
    ær: "arr",
    ʊr: "urr",
    // ər: "e", // Doesn't require special treatment
    // ʌr: "á", // Doesn't require special treatment

    // long r-liaison without -r
    ɪə: "ii",
    eə: "éé",
    ɔː: "oo",
    ɑː: "aa",
    ʊə: "uu",
    ɜː: "ee",

    // j-diphthongs
    iː: "ij",
    eɪ: "éj",
    ɔɪ: "oj",
    aɪ: "aj",

    // w-diphthings
    əʊ: "ow",
    aʊ: "aw",
    uː: "uw"
  },

  monographs: {
    ///////////////
    // CONSONANTS

    // plosives
    // p: "p",
    // b: "b",
    // t: "t",
    // d: "d",
    // k: "k",
    // g: "g",

    // fricatives
    // f: "f",
    // v: "v",
    θ: "þ",
    // ð: "ð",
    // s: "s",
    // z: "z",
    ʃ: "sh",
    ʒ: "zh",
    x: "ch",
    // ʍ: "wh", // archaic
    // h: "h",

    // nasals
    // m: "m",
    // n: "n",
    ŋ: "ng",

    // approximants
    // l: "l",
    // r: "r",
    // j: "j",
    // w: "w",

    ///////////////
    // VOWELS

    // short
    ɪ: "i",
    ɛ: "é",
    ɒ: "o",
    æ: "a",
    ʊ: "u",
    ə: "e",
    ʌ: "á",
    i: "ij"
  }
};

export default map;

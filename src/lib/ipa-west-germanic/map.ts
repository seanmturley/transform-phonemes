import ipaDigraphExceptions from "./ipa-digraph-exceptions.ts";
import type { TransliterationMap } from "../../transliterate/types.ts";
import { vowelOrEndOfClause, wordEnd, wordStart } from "../../utils/regex.ts";

const vowels = "AÁEÉIOUaáeéiou";

const map: TransliterationMap = {
  pre: {
    // Groups of phonemes are presented in decreasing order of prioritization

    // Phonemes not requiring transliteration are commented out

    exceptions: {
      ...ipaDigraphExceptions,

      // Ambigious West Germanc digraph pairs
      // Hyphenation to disambiguate from digraphs
      dg: "d-g",
      sh: "s-h",
      zh: "z-h",
      tʃh: "c-h",
      ng: "n-g"
    },

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
  },
  post: {
    [`${wordStart}ev${wordEnd}`]: "ov",
    [`${wordStart}Ev${wordEnd}`]: "Ov",
    [`${wordStart}end${wordEnd}`]: "and",
    [`${wordStart}End${wordEnd}`]: "And",
    [`${wordStart}ðe${vowelOrEndOfClause(vowels)}`]: "ðij",
    [`${wordStart}Ðe${vowelOrEndOfClause(vowels)}`]: "Ðij",
    [`${wordStart}te${vowelOrEndOfClause(vowels)}`]: "tuw",
    [`${wordStart}Te${vowelOrEndOfClause(vowels)}`]: "Tuw"
  }
};

export default map;

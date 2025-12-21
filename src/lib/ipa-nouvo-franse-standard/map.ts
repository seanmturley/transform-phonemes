import type { TransliterationMap } from "../../transliterate/types.ts";

const map: TransliterationMap = {
  pre: {
    // Groups of phonemes are presented in decreasing order of prioritization

    // Phonemes not requiring transliteration are commented out

    exceptions: {},

    trigraphs: {},

    digraphs: {
      ɛː: "ê"
    },

    monographs: {
      ///////////////
      // CONSONANTS

      // There's currently no provision made for silent final
      // "liaison consonants"

      // plosives
      // p: "p",
      // b: "b",
      // t: "t",
      // d: "d",
      k: "c",
      // g: "g",

      // fricatives
      // f: "f",
      // v: "v",
      // s: "s",
      // z: "z",
      ʃ: "ch",
      ʒ: "j",

      // nasals
      // m: "m",
      // n: "n",
      ɲ: "gn",
      ŋ: "ng",

      // approximants
      // l: "l",
      // r: "r",
      j: "ǐ",
      ɥ: "ǔ",
      w: "oǔ",

      ///////////////
      // VOWELS

      // oral
      i: "i",
      y: "u",
      u: "ou",
      e: "é",
      ø: "eú",
      o: "ó",
      ɛ: "è",
      œ: "eù",
      ɔ: "ò",
      ə: "e",
      a: "a",
      ɑ: "â",

      // nasal
      // It's currently unclear how to handle nasal vowels given their
      // variable spelling in the current orthographic system
      ɛ̃: "en", // em, ę
      œ̃: "un", // um, ų
      ɔ̃: "on", // om, ǫ
      ɑ̃: "an" // am, ą
    }
  }
  // post: {
  //   always: { ev: "ov", end: "and" },
  //   beforeConsonants: { intuw: "inte", ontuw: "onte" },
  //   notBeforeConsonants: { ðe: "ðij", te: "tuw" },
  //   afterApostrophe: {
  //     ...ipaLeadingApostrophes
  //   }
  // },
  // regexPatterns: {
  //   vowels: "AÁEÉIOUaáeéiou",
  //   consonants: "b-df-hj-np-tv-zðþB-DF-HJ-NP-TV-ZÐÞ"
  // }
};

export default map;

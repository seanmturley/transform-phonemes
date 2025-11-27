// Exception list from Wikipedia "List of English contractions"
// https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions

import { singleQuotes } from "../../utils/regex.ts";
import type { TransliterationMapGroup } from "../../transliterate/types.ts";

const ipaLeadingApostrophes: TransliterationMapGroup = {
  [`${singleQuotes}ənd`]: "en",
  [`${singleQuotes}ənd${singleQuotes}`]: "en",
  [`${singleQuotes}baʊt`]: "bawt",
  [`${singleQuotes}kɔːz`]: "kooz",
  [`${singleQuotes}kʌz`]: "kez",
  [`${singleQuotes}sɛpt`]: "sépt",
  [`${singleQuotes}əm`]: "em",
  [`${singleQuotes}geɪnst`]: "géjnst",
  [`${singleQuotes}niːθ`]: "nijþ",
  [`${singleQuotes}raʊnd`]: "rawnd",
  [`${singleQuotes}z`]: "z",
  [`${singleQuotes}θaʊt`]: "þawt",
  [`${singleQuotes}tɪl`]: "til",
  [`${singleQuotes}tɪz`]: "tiz",
  [`${singleQuotes}twɒz`]: "twoz",
  [`${singleQuotes}twiːn`]: "twijn",
  [`${singleQuotes}twɜːr`]: "tweer"
};

export default ipaLeadingApostrophes;

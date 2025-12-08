// Exception list from Wikipedia "List of English contractions"
// https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions

import { singleQuotes } from "../../utils/regex.ts";
import type { TransliterationMapGroup } from "../../transliterate/types.ts";

const ipaLeadingApostrophes: TransliterationMapGroup = {
  end: "en",
  [`end${singleQuotes}`]: "en",
  bawt: "bawt",
  kooz: "kooz",
  káz: "kez",
  sépt: "sépt",
  em: "em",
  géjnst: "géjnst",
  nijþ: "nijþ",
  rawnd: "rawnd",
  z: "z",
  þawt: "þawt",
  til: "til",
  tiz: "tiz",
  twoz: "twoz",
  twijn: "twijn",
  tweer: "tweer"
};

export default ipaLeadingApostrophes;

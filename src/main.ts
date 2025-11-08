import map from "./lib/ipa-west-germanic/map.ts";
import transliterateText from "./transliterate/text.ts";

const phonemicPangram =
  "Ðə beɪʒ hjuː ɒn ðə wɔːtərz əv ðə lɒx ɪmprɛst ɔːl, ɪnkluːdɪŋ ðə Frɛntʃ kwiːn, bɪfɔːr ʃiː hɜːrd ðæt sɪmfəni əgeɪn, dʒʌst æz jʌŋ Ɑːrθər wɒntəd.";
// "The beige hue on the waters of the loch impressed all, including the French queen, before she heard that symphony again, just as young Arthur wanted."

console.log(transliterateText(phonemicPangram, map));

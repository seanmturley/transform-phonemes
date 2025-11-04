import map from "./lib/ipa-west-germanic.ts";
import transliterateText from "./transliterate/text.ts";

const phonemicPangram =
  "ðə beɪʒ hjuː ɒn ðə wɔːtərz əv ðə lɒx ɪmprɛst ɔːl, ɪnkluːdɪŋ ðə frɛntʃ kwiːn, bɪfɔːr ʃiː hɜːrd ðæt sɪmfəni əgeɪn, dʒʌst æz jʌŋ ɑːrθər wɒntəd.";
// "The beige hue on the waters of the loch impressed all, including the French queen, before she heard that symphony again, just as young Arthur wanted."

console.log(transliterateText(phonemicPangram, map));

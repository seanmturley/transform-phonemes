import capitalizeFirstLetter from "./capitalize-first-letter.ts";
import {
  followedByConsonant,
  followedByVowelOrEndOfClause,
  singleQuotes,
  wordEnd,
  wordStart
} from "./regex.ts";
import type { TransliterationMapGroup } from "../transliterate/types.ts";

function always(pre: string, post: string) {
  const capitalizedPre = capitalizeFirstLetter(pre);
  const capitalizedPost = capitalizeFirstLetter(post);

  return [
    [`${wordStart}${pre}${wordEnd}`, post],
    [`${wordStart}${capitalizedPre}${wordEnd}`, capitalizedPost]
  ];
}

function beforeConsonants(
  pre: string,
  post: string,
  regexPatterns: TransliterationMapGroup
) {
  const capitalizedPre = capitalizeFirstLetter(pre);
  const capitalizedPost = capitalizeFirstLetter(post);

  return [
    [
      `${wordStart}${pre}${followedByConsonant(regexPatterns.consonants)}`,
      post
    ],
    [
      `${wordStart}${capitalizedPre}${followedByConsonant(regexPatterns.consonants)}`,
      capitalizedPost
    ]
  ];
}

function notBeforeConsonants(
  pre: string,
  post: string,
  regexPatterns: TransliterationMapGroup
) {
  const capitalizedPre = capitalizeFirstLetter(pre);
  const capitalizedPost = capitalizeFirstLetter(post);

  return [
    [
      `${wordStart}${pre}${followedByVowelOrEndOfClause(regexPatterns.vowels)}`,
      post
    ],
    [
      `${wordStart}${capitalizedPre}${followedByVowelOrEndOfClause(regexPatterns.vowels)}`,
      capitalizedPost
    ]
  ];
}

function afterApostrophe(pre: string, post: string) {
  const capitalizedPre = capitalizeFirstLetter(pre);
  const capitalizedPost = capitalizeFirstLetter(post);

  return [
    [`${wordStart}${singleQuotes}${pre}${wordEnd}`, post],
    [`${wordStart}${capitalizedPre}${wordEnd}`, capitalizedPost]
  ];
}

type PostProcessing = {
  [key: string]: Function;
};

const postProcessing: PostProcessing = {
  [always.name]: always,
  [beforeConsonants.name]: beforeConsonants,
  [notBeforeConsonants.name]: notBeforeConsonants,
  [afterApostrophe.name]: afterApostrophe
};

export default postProcessing;

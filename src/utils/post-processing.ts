import capitalizeFirstLetter from "./capitalizeFirstLetter.ts";
import {
  followedByConsonant,
  followedByVowelOrEndOfClause,
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

type PostProcessing = {
  [key: string]: Function;
};

const postProcessing: PostProcessing = {
  [always.name]: always,
  [beforeConsonants.name]: beforeConsonants,
  [notBeforeConsonants.name]: notBeforeConsonants
};

export default postProcessing;

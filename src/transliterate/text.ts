import capitalizeFirstLetter from "../utils/capitalize-first-letter.ts";
import postProcessing from "../utils/post-processing.ts";
import type {
  PostProcessingMap,
  PreProcessingMap,
  TransliterationMap,
  TransliterationMapGroup
} from "./types.ts";

export default function transliterateText(
  text: string,
  map: TransliterationMap
) {
  let transliteration = text;

  const transliterate = (source: string, target: string) => {
    transliteration = transliteration.replaceAll(
      source,
      currentPlaceholderChar
    );
    storeThenIncrementPlaceholder(target);

    transliteration = transliteration.replaceAll(
      capitalizeFirstLetter(source),
      currentPlaceholderChar
    );
    storeThenIncrementPlaceholder(capitalizeFirstLetter(target));
  };

  const placeholderMap: TransliterationMapGroup = {};

  // Start placeholders from the first value in Unicode
  // Supplementary Private Use Area-B
  let currentPlaceholderInt = parseInt("100000", 16);
  let currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;

  const storeThenIncrementPlaceholder = (target: string) => {
    placeholderMap[currentPlaceholderChar] = target;

    currentPlaceholderInt++;
    currentPlaceholderChar = `\\u{${currentPlaceholderInt.toString(16)}}`;
  };

  // TypeScript requires some awkward and verbose definitions here
  type Entries<T> = {
    [K in keyof T]-?: [K, T[K]];
  }[keyof T][];

  const objectEntries = <T extends object>(obj: T) =>
    Object.entries(obj) as Entries<T>;

  let group: keyof PreProcessingMap;
  for (group in map.pre) {
    const mapGroup = map.pre[group] as TransliterationMapGroup;

    for (const [source, target] of objectEntries(mapGroup)) {
      transliterate(source, target);
    }
  }

  for (const [placeholderChar, target] of objectEntries(placeholderMap)) {
    transliteration = transliteration.replaceAll(placeholderChar, target);
  }

  if (map.post) {
    let process: keyof PostProcessingMap;
    for (process in map.post) {
      const processGroup = map.post[process] as TransliterationMapGroup;

      for (const [pre, post] of objectEntries(processGroup)) {
        const processing = postProcessing[process](
          pre,
          post,
          map?.regexPatterns
        );

        processing.forEach(([pattern, post]: string[]) => {
          const regex = new RegExp(pattern, "gu");

          transliteration = transliteration.replaceAll(regex, post);
        });
      }
    }
  }

  return transliteration;
}

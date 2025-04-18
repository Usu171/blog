import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    console.log(readingTime);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.minutes;
    data.astro.frontmatter.words = readingTime.words;
  };
}
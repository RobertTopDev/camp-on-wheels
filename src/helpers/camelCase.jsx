export default function splitAndCapitalize(camelCaseWord) {
  const words = camelCaseWord.split(/(?=[A-Z])/);
  const capitalizedWords = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedWords;
}

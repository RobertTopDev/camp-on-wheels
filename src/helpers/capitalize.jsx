export default function capitalizeText(text) {
  return text.toLowerCase().replace(/\b\w/g, (letter) => {
    return letter.toUpperCase();
  });
}

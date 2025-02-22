export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const getFirstCharacters = (text: string, length: number = 1): string => {
  return text?.slice(0, length).toUpperCase();
}

export const capitalizeWords = (sentence: string): string => {
  if (!sentence) return '';

  return sentence
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
};

export const getPhoneFormat = (phone: string): string => {
  return phone?.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
};

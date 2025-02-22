import { IFullName } from "@shared/interfaces/IFullName";
import { capitalizeWords } from "@shared/utils/TextUtils";

export const getFullName = (nameObj: IFullName) => {
  if (!nameObj) return '';

  const fullName = `${nameObj.name} ${nameObj.firstLastName || ''} ${nameObj.secondLastName || ''}`;

  return capitalizeWords(fullName);
};

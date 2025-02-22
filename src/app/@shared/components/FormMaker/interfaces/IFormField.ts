import { FieldTypeEnum } from "@shared/components/FormMaker/enums/FieldTypeEnum";

export interface IFormField {
  id: string;
  group: string;
  category: string;
  title: string;
  type: FieldTypeEnum;
  isRequired: boolean;
  isMultiple?: boolean;
  options?: string[];
  value?: string | string[];
}

import {
  ISelectOption
} from "@shared/components/Form/interfaces/ISelectOption";
import { FieldTypeEnum, FieldTypeEnumLabel } from "@shared/components/FormMaker/enums/FieldTypeEnum";

export const FieldTypeOptions: ISelectOption[] = Object.values(FieldTypeEnum).map((value) => ({
  label: FieldTypeEnumLabel[value as FieldTypeEnum],
  value: value
}));

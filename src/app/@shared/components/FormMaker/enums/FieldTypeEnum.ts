export enum FieldTypeEnum {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  SWITCH = 'switch',
  DATE = 'date',
  TIME = 'time',
  NUMBER = 'number'
}

export const FieldTypeEnumLabel = {
  [FieldTypeEnum.TEXT]: 'Texto',
  [FieldTypeEnum.TEXTAREA]: 'Área de texto',
  [FieldTypeEnum.SELECT]: 'Selección',
  [FieldTypeEnum.SWITCH]: 'Si / No',
  [FieldTypeEnum.DATE]: 'Fecha',
  [FieldTypeEnum.TIME]: 'Hora',
  [FieldTypeEnum.NUMBER]: 'Número'
};

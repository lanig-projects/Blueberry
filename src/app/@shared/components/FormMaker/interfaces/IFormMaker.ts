import { IFormField } from "@shared/components/FormMaker/interfaces/IFormField";
import { IFormMakerGroup } from "@shared/components/FormMaker/interfaces/IFormMakerGroup";
import { IFormCategory } from "@shared/components/FormMaker/interfaces/IFormCategory";

export interface IFormMaker {
  fields: IFormField[];
  groups: IFormMakerGroup[];
  categories?: IFormCategory[];
}

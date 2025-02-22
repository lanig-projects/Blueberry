import { IDocumentTimes } from "@shared/interfaces/IDocumentTimes";

export interface IDocumentDatabase extends IDocumentTimes {
  id: string;
  trash: boolean;
}

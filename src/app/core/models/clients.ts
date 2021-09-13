import { AppElementDef, AppElementType } from "./element";

export interface AppTemplate extends AppElementDef {
  type: AppElementType.Document;
}

export interface AppElementStyles {
  content: string;
}

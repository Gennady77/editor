export type AppElementId = string;

export enum AppElementType {
  Document = 'document',
  Text = 'text',
};

export interface AppElementDef {
  id: AppElementId;
  data: AppElementDefData;
}

export interface AppElementDefData {
  text?: string;
}

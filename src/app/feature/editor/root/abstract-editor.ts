import { ComponentRef, Type } from "@angular/core";
import { AppTemplate } from "../../../core/models/clients";

export interface PageSnapshot {
  template: AppTemplate
}

export abstract class AbstractEditor {
  abstract createControl<T>(controlComp: Type<T>): ComponentRef<T>;
}

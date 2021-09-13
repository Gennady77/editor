import { InjectionToken, Type } from "@angular/core";
import { AppElementType } from "../../core/models/element";

export type ElementComponents<T> = { [name in AppElementType]: Type<T> };

export const ELEMENT_COMPONENTS = new InjectionToken<ElementComponents<any>>('ELEMENT_COMPONENTS');

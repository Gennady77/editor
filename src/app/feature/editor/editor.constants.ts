import { Observable } from "rxjs";

export interface EditorBehaviorAbstract {
  init(): Observable<any>;
}

export interface AppEditorConfig {
  behaviours?: any[];
  makers?: {[elementType: string]: any};
}

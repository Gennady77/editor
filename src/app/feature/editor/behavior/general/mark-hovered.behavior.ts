import { merge, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { EditorElementButtonsControl } from "../../control/element-buttons/element-buttons.control";
import { EditorBehaviorAbstract } from "../../editor.constants";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'any' })
export class EditorBehaviorMarkHovered implements EditorBehaviorAbstract {
  init(): Observable<any> {
    return merge(this.showHoveredBorders);
  }

  get showHoveredBorders(): Observable<any> {
    return of([]).pipe(
      tap(_ => {
        // const buttonsControl = EditorElementButtonsControl.construct(this.editor, hoveredCmp);
      })
    );
  }
}

import { Component, Input } from "@angular/core";
import { AbstractEditor } from "../../root/abstract-editor";
import { EditorElement } from "../../renderer/editor-element";

@Component({
  selector: 'editor-buttons-control',
  templateUrl: './element-buttons.control.html',
  styleUrls: ['./element-buttons.control.scss']
})
export class EditorElementButtonsControl {
  @Input() public component!: EditorElement;

  static construct(editor: AbstractEditor, element: EditorElement) {
    const control = editor.createControl(EditorElementButtonsControl);

    control.instance.component = element;
    control.instance.detectChanges();

    element.controlsSlot?.insert(control.hostView);
    element.controls.buttons = control;
  }

  public detectChanges() {
    if(!this.component.nativeElement) {
      return;
    }
  }
}

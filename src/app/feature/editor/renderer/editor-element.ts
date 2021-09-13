import { ComponentRef, ViewContainerRef } from "@angular/core";
import { EditorElementButtonsControl } from "../control/element-buttons/element-buttons.control";
import { AppAbstractElement } from "../../renderer/elements/abstract/abstract.element";

export class EditorElement {
  public controls: {
    buttons?: ComponentRef<EditorElementButtonsControl>
  } = {};

  constructor(
    public target: AppAbstractElement
  ) {}

  get nativeElement(): HTMLElement {
    return this.target.nativeElement;
  }

  get controlsSlot(): ViewContainerRef | undefined {
    return this.target.controlsSlot;
  }
}

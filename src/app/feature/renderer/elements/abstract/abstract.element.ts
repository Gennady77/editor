import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Subject } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";
import { AppElementDef } from "../../../../core/models/element";
import { AppElementStyles } from "../../../../core/models/clients";

@Component({
  template: ''
})
export abstract class AppAbstractElement implements OnInit, OnDestroy {
  @ViewChild('CONTROLS', {read: ViewContainerRef}) controlsSlot: ViewContainerRef | undefined;

  @Input() element: AppElementDef | undefined;
  @Input() styles: AppElementStyles | undefined;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private elementRef: ElementRef,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}

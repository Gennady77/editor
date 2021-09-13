import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChildrenSlot]'
})
export class ChildrenSlotDirective {
  @Input('appChildrenSlot') name = '';

  constructor(
    public viewRef: ViewContainerRef
  ) { }

}

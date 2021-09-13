import { Component, OnDestroy } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Component({
  selector: '',
  template: ''
})
export abstract class AbstractComponent implements OnDestroy{
  protected destroyed$ = new ReplaySubject<boolean>();

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

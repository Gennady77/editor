import { AppAbstractElement } from "../abstract/abstract.element";
import { Component, Input, OnInit } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { SafeHtml } from "@angular/platform-browser";
import { AppRendererOptions } from "../../renderer.types";
import { takeUntil, tap } from "rxjs/operators";
import { AppElementDef } from "../../../../core/models/element";

@Component({
  selector: 'app-element-text',
  templateUrl: './text.element.html',
  styleUrls: [
    './text.element.scss',
  ],
})
export class AppTextElement extends AppAbstractElement implements OnInit {
  @Input() set options(options: AppRendererOptions) {
    this.rendererOptions = options;
    this.rendererOptionsChanged$.next()
  }

  sanitizedText$ = new Subject<SafeHtml>();

  private rendererOptionsChanged$ = new ReplaySubject<void>(1);
  private rendererOptions: AppRendererOptions | undefined;
  private get rawText(): string {
    return this.element?.data?.text ?? this.styles?.content ?? '';
  }

  ngOnInit() {
    super.ngOnInit();
    this.rendererOptionsChanged$.pipe(
      tap(() => {
        const content = this.rawText;

        this.sanitizedText$.next(this.sanitizer.bypassSecurityTrustHtml(content));
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }
}

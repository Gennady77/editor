import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './elements/shop/cart/cart.component';
import { RendererComponent } from './root/renderer.component';
import { ChildrenSlotDirective } from './selectors/children-slot.directive';
import { ELEMENT_COMPONENTS } from "./renderer.tokens";
import { AppTextElement } from "./elements/text/text.element";

export const AVAILABLE_ELEMENTS_MAP = {
  text: AppTextElement
};

@NgModule({
  declarations: [
    CartComponent,
    RendererComponent,
    ChildrenSlotDirective,
    AppTextElement,
  ],
  providers: [{
    provide: ELEMENT_COMPONENTS,
    useValue: AVAILABLE_ELEMENTS_MAP,
  }],
  exports: [
    CartComponent,
    RendererComponent,
    AppTextElement
  ],
  imports: [
    CommonModule
  ]
})
export class RendererModule { }

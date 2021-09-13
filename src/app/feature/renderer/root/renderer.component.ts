import {
  AfterViewInit,
  Component, ComponentFactoryResolver,
  ComponentRef,
  Inject, Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ChildrenSlotDirective } from "../selectors/children-slot.directive";
import { AppAbstractElement } from "../elements/abstract/abstract.element";
import { AppElementDef, AppElementId, AppElementType } from "../../../core/models/element";
import { BehaviorSubject } from "rxjs";
import { ELEMENT_COMPONENTS, ElementComponents } from "../renderer.tokens";
import { AppElementStyles } from "../../../core/models/clients";

export interface AppRendererElementDef {
  type: AppElementType,
  styles: AppElementStyles,
}

export type AppElementsRegistry = Map<AppElementId, AppRendererElementDef>;

export type ComponentsRegistry = Map<AppElementId, ComponentRef<AppAbstractElement>>;

export type RenderMaker = ComponentRef<AppAbstractElement>

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() element!: AppElementDef;

  @ViewChild(ChildrenSlotDirective, {read: ViewContainerRef}) contentSlot: ViewContainerRef | undefined;

  private elementsRegistry: AppElementsRegistry = new Map();
  private componentsRegistry: ComponentsRegistry = new Map();
  private nextMakerSubject$ = new BehaviorSubject<RenderMaker | undefined>(undefined);

  constructor(
    @Inject(ELEMENT_COMPONENTS) private elementsComponents: ElementComponents<AppAbstractElement>,
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.contentSlot) {
      this.renderDocument();
    }
  }

  ngAfterViewInit() {
    this.renderDocument();
  }

  setMaker(maker: RenderMaker) {
    this.nextMakerSubject$.next(maker);
    this.renderDocument();
  }

  renderDocument() {
    const newComponentsRegistry: ComponentsRegistry = new Map();
    const elCmp = this.renderElement({
      type: AppElementType.Text,
      styles: {
        content: 'some test context'
      }
    });


    newComponentsRegistry.set(this.element.id, elCmp)

    const documentCmpRef = newComponentsRegistry.get(this.element.id);

    if(documentCmpRef) {
      this.contentSlot?.insert(documentCmpRef.hostView);
    }
  }

  private renderElement(elementDef: AppRendererElementDef): ComponentRef<AppAbstractElement> {
    const ElementComponent = this.elementsComponents[elementDef.type] as any;

    if(!ElementComponent) {
      throw new Error(`"elementDef.type" element component was not found`)
    }

    const elViewFactory = this.cfr.resolveComponentFactory<AppAbstractElement>(ElementComponent);
    const elViewInjector = this.createElementInjector();
    const elViewRef = elViewFactory.create(elViewInjector);

    Object.assign(elViewRef.instance, {
      element: '',
      styles: elementDef.styles || {}
     });

    elViewRef.changeDetectorRef.detectChanges();

    return elViewRef;
  }

  private createElementInjector() {
    return Injector.create({
      providers: [],
      parent: this.injector,
    });
  }
}

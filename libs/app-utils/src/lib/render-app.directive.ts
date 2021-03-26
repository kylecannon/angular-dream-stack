import {
  Directive,
  Input,
  NgModuleRef,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadableApp } from '@angular-dream/app-utils';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[renderApp]',
})
export class RenderAppDirective implements OnDestroy {
  currentNgModuleRef?: NgModuleRef<unknown>;

  @Input() set renderApp(ngModuleRef: NgModuleRef<LoadableApp> | null) {
    if (!ngModuleRef || this.currentNgModuleRef) {
      return;
    }
    this.currentNgModuleRef = ngModuleRef;

    const injector = ngModuleRef.injector;
    const router = ngModuleRef.injector.get(Router, null);
    if (!ngModuleRef.instance.EntryComponent) {
      throw Error(
        `Cannot load app: ${ngModuleRef} cause the EntryComponent is not defined in the Module.`
      );
    }

    const componentRef = ngModuleRef.componentFactoryResolver
      .resolveComponentFactory(ngModuleRef.instance.EntryComponent)
      .create(injector);

    this.viewContainerRef.insert(componentRef.hostView);

    router?.initialNavigation();
    componentRef.changeDetectorRef.detectChanges();
  }

  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  ngOnDestroy() {
    if (this.currentNgModuleRef) {
      this.currentNgModuleRef.injector.get(Store, null)?.complete();
      this.currentNgModuleRef.destroy();
      this.currentNgModuleRef = undefined;
    }
  }
}

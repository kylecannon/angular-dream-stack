import {
  Compiler,
  Injectable,
  Injector,
  NgModuleFactory,
  Type,
} from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { PlatformLocation } from '@angular/common';
import { AppPlatformLocation } from './app-platform-location.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppRegistration } from './app-registration';
import { EffectsRunner } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppLoader {
  constructor(private compiler: Compiler) {}

  createParentInjector(injector: Injector) {
    return Injector.create({
      providers: [
        {
          provide: Router,
          useValue: null,
        },
        {
          provide: Store,
          useValue: null,
        },
        {
          provide: EffectsRunner,
          useValue: null,
        },
        {
          provide: PlatformLocation,
          useClass: AppPlatformLocation,
          deps: [],
        },
      ],
      parent: injector,
    });
  }

  createNgModuleRef(registration: AppRegistration, injector: Injector) {
    return fromPromise(
      registration
        .bundle()
        .then((loadableApp) => this.compiler.compileModuleAsync(loadableApp))
        .then((ngModuleFactory) =>
          ngModuleFactory.create(this.createParentInjector(injector))
        )
    );
  }
}

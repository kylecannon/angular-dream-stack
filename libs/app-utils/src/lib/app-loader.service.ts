import {
  createNgModule,
  Injectable,
  Injector,
} from '@angular/core';
import { from } from 'rxjs';
import { PlatformLocation } from '@angular/common';
import { AppPlatformLocation } from './app-platform-location.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppRegistration } from './app-registration';

@Injectable({
  providedIn: 'root',
})
export class AppLoader {
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
          provide: PlatformLocation,
          useClass: AppPlatformLocation,
          deps: [],
        },
      ],
      parent: injector,
    });
  }

  createNgModuleRef(registration: AppRegistration, injector: Injector) {
    return from(
      registration
        .bundle()
        .then((loadableApp) =>
          createNgModule(loadableApp, this.createParentInjector(injector))
        )
    );
  }
}

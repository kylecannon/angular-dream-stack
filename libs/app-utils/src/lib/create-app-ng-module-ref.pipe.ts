import { Injector, NgModuleRef, Pipe, PipeTransform } from '@angular/core';
import { LoadableApp, AppRegistration } from '@angular-dream/app-utils';
import { AppLoader } from './app-loader.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Pipe({
  name: 'createAppNgModuleRef',
})
export class CreateAppNgModuleRefPipe implements PipeTransform {
  constructor(private readonly appLoader: AppLoader) {}
  transform(
    appRegistration: AppRegistration,
    parentInjector: Injector
  ): Observable<NgModuleRef<LoadableApp>> {
    return this.appLoader
      .createNgModuleRef(appRegistration, parentInjector)
      .pipe(
        catchError((error) => {
          console.error('Error when creating app NgModule: ', error);
          return throwError(error);
        })
      );
  }
}

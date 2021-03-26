import { LocationChangeListener, PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class AppPlatformLocation implements PlatformLocation {
  hash = '';
  readonly hostname: string = '';
  readonly href: string = '';
  readonly pathname: string = '';
  readonly port: string = '';
  readonly protocol: string = '';
  readonly search: string = '';

  back(): void {}

  forward(): void {}

  getBaseHrefFromDOM(): string {
    return '';
  }

  getState(): unknown {
    return undefined;
  }

  onHashChange(fn: LocationChangeListener): void {}

  onPopState(fn: LocationChangeListener): void {}

  pushState(state: any, title: string, url: string): void {}

  replaceState(state: any, title: string, url: string): void {}
}

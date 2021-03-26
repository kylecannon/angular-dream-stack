import { Type } from '@angular/core';
import { LoadableApp } from '@angular-dream/app-utils';

export interface AppRegistration {
  name: string;
  bundle: () => Promise<Type<LoadableApp>>;
  defaultHeightPx?: number;
}

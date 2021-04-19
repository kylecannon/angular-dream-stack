import { InjectionToken } from '@angular/core';
import { AppRegistration } from '@angular-dream/app-utils';

export const AVAILABLE_APPS = new InjectionToken<{
  [appName: string]: AppRegistration;
}>('Available Apps');

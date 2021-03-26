import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInstanceComponent } from './app-instance/app-instance.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppUtilsModule } from '@angular-dream/app-utils';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    AppUtilsModule,
    ReactiveComponentModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    AppInstanceComponent,
    AppContainerComponent,
    AppHeaderComponent,
  ],
  exports: [AppInstanceComponent, AppContainerComponent, AppHeaderComponent],
})
export class FeatureAppViewModule {}

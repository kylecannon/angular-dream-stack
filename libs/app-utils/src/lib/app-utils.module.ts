import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RenderAppDirective } from './render-app.directive';
import { CreateAppNgModuleRefPipe } from './create-app-ng-module-ref.pipe';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [RenderAppDirective, CreateAppNgModuleRefPipe],
  exports: [RenderAppDirective, CreateAppNgModuleRefPipe],
})
export class AppUtilsModule {}

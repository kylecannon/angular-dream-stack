import { Component, Input, NgModuleRef } from '@angular/core';
import { LoadableApp } from '@angular-dream/app-utils';

@Component({
  selector: 'angular-dream-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
})
export class AppContainerComponent {
  @Input() ngModuleRef: NgModuleRef<LoadableApp>;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angular-dream-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  @Input() appName: string;
  @Output() removeApp = new EventEmitter<void>();
}

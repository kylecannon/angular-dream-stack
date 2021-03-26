import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  Output,
} from '@angular/core';
import { AppRegistration } from '@angular-dream/app-utils';

export abstract class AppInstance {
  removeApp: EventEmitter<void>;
}

@Component({
  selector: 'angular-dream-app-instance',
  templateUrl: './app-instance.component.html',
  styleUrls: ['./app-instance.component.scss'],
  viewProviders: [
    {
      provide: AppInstance,
      useExisting: forwardRef(() => AppInstanceComponent),
    },
  ],
})
export class AppInstanceComponent implements AppInstance {
  @Input() appRegistration: AppRegistration;
  @Input() id: string;
  @Output() removeApp = new EventEmitter<void>();

  constructor(readonly injector: Injector) {}
}

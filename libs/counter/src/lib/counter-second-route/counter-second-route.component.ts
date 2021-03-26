import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-second-route',
  templateUrl: './counter-second-route.component.html',
  styleUrls: ['./counter-second-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterSecondRouteComponent {}

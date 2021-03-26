import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-first-route',
  templateUrl: './counter-first-route.component.html',
  styleUrls: ['./counter-first-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterFirstRouteComponent {}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard-first-route',
  templateUrl: './scoreboard-first-route.component.html',
  styleUrls: ['./scoreboard-first-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreboardFirstRouteComponent {}

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterFirstRouteComponent } from './counter-first-route.component';

describe('CounterFirstRouteComponent', () => {
  let component: CounterFirstRouteComponent;
  let fixture: ComponentFixture<CounterFirstRouteComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CounterFirstRouteComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFirstRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

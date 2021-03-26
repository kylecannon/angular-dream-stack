import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterSecondRouteComponent } from './counter-second-route.component';

describe('CounterSecondRouteComponent', () => {
  let component: CounterSecondRouteComponent;
  let fixture: ComponentFixture<CounterSecondRouteComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CounterSecondRouteComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSecondRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

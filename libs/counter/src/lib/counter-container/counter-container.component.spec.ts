import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterContainerComponent } from './counter-container.component';

describe('CounterContainerComponent', () => {
  let component: CounterContainerComponent;
  let fixture: ComponentFixture<CounterContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CounterContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

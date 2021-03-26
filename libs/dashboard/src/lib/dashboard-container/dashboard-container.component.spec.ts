import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardContainerComponent } from './dashboard-container.component';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

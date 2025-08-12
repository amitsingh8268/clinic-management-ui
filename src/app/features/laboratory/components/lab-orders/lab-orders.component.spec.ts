import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabOrdersComponent } from './lab-orders.component';

describe('LabOrdersComponent', () => {
  let component: LabOrdersComponent;
  let fixture: ComponentFixture<LabOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabOrdersComponent]
    });
    fixture = TestBed.createComponent(LabOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailPassChartComponent } from './fail-pass-chart.component';

describe('FailPassChartComponent', () => {
  let component: FailPassChartComponent;
  let fixture: ComponentFixture<FailPassChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FailPassChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailPassChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

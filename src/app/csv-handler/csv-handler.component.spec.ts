import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvHandlerComponent } from './csv-handler.component';

describe('CsvHandlerComponent', () => {
  let component: CsvHandlerComponent;
  let fixture: ComponentFixture<CsvHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

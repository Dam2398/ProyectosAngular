import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoIBMComponent } from './resultado-ibm.component';

describe('ResultadoIBMComponent', () => {
  let component: ResultadoIBMComponent;
  let fixture: ComponentFixture<ResultadoIBMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoIBMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoIBMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBIMComponent } from './inicio-bim.component';

describe('InicioBIMComponent', () => {
  let component: InicioBIMComponent;
  let fixture: ComponentFixture<InicioBIMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioBIMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioBIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

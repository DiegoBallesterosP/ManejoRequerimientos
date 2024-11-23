import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRequerimientoComponent } from './crear-requerimiento.component';

describe('CrearRequerimientoComponent', () => {
  let component: CrearRequerimientoComponent;
  let fixture: ComponentFixture<CrearRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearRequerimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

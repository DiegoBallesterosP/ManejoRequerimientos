//src\app\inicio-pagina\inicio-pagina.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPaginaComponent } from './inicio-pagina.component';

describe('InicioPaginaComponent', () => {
  let component: InicioPaginaComponent;
  let fixture: ComponentFixture<InicioPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

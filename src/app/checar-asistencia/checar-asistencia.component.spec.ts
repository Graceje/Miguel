import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecarAsistenciaComponent } from './checar-asistencia.component';

describe('ChecarAsistenciaComponent', () => {
  let component: ChecarAsistenciaComponent;
  let fixture: ComponentFixture<ChecarAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecarAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

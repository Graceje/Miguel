import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroChecadorComponent } from './registro-checador.component';

describe('RegistroChecadorComponent', () => {
  let component: RegistroChecadorComponent;
  let fixture: ComponentFixture<RegistroChecadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroChecadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroChecadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

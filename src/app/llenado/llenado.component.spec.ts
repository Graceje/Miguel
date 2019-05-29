import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenadoComponent } from './llenado.component';

describe('LlenadoComponent', () => {
  let component: LlenadoComponent;
  let fixture: ComponentFixture<LlenadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlenadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

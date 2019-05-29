import { TestBed, inject } from '@angular/core/testing';

import { SeleccionService } from './seleccion.service';

describe('SeleccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeleccionService]
    });
  });

  it('should be created', inject([SeleccionService], (service: SeleccionService) => {
    expect(service).toBeTruthy();
  }));
});

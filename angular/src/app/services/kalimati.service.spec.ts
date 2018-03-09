import { TestBed, inject } from '@angular/core/testing';

import { KalimatiService } from './kalimati.service';

describe('KalimatiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KalimatiService]
    });
  });

  it('should be created', inject([KalimatiService], (service: KalimatiService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { TrainlListService } from './trainl-list.service';

describe('TrainlListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainlListService]
    });
  });

  it('should be created', inject([TrainlListService], (service: TrainlListService) => {
    expect(service).toBeTruthy();
  }));
});

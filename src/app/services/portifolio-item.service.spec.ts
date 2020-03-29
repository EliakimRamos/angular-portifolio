import { TestBed, inject } from '@angular/core/testing';

import { PortifolioItemService } from './portifolio-item.service';

describe('PortifolioItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortifolioItemService]
    });
  });

  it('should be created', inject([PortifolioItemService], (service: PortifolioItemService) => {
    expect(service).toBeTruthy();
  }));
});

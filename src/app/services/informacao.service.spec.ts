import { TestBed, inject } from '@angular/core/testing';

import { InformacaoService } from './informacao.service';

describe('InformacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacaoService]
    });
  });

  it('should be created', inject([InformacaoService], (service: InformacaoService) => {
    expect(service).toBeTruthy();
  }));
});

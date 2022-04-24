import { TestBed } from '@angular/core/testing';

import { DropTabletwsService } from './drop-tabletws.service';

describe('DropTabletwsService', () => {
  let service: DropTabletwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropTabletwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

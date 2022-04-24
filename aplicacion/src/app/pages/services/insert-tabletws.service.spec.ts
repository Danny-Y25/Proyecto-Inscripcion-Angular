import { TestBed } from '@angular/core/testing';

import { InsertTabletwsService } from './insert-tabletws.service';

describe('InsertTabletwsService', () => {
  let service: InsertTabletwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertTabletwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

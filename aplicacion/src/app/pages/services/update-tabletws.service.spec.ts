import { TestBed } from '@angular/core/testing';

import { UpdateTabletwsService } from './update-tabletws.service';

describe('UpdateTabletwsService', () => {
  let service: UpdateTabletwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTabletwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

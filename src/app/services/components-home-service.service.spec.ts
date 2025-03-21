import { TestBed } from '@angular/core/testing';

import { ComponentsHomeServiceService } from './components-home-service.service';

describe('ComponentsHomeServiceService', () => {
  let service: ComponentsHomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsHomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

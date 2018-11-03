import { TestBed } from '@angular/core/testing';

import { VideoserviceService } from './videoservice.service';

describe('VideoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoserviceService = TestBed.get(VideoserviceService);
    expect(service).toBeTruthy();
  });
});

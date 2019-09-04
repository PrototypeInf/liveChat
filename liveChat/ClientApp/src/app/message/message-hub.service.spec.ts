import { TestBed } from '@angular/core/testing';

import { MessageHubService } from './message-hub.service';

describe('MessageHubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageHubService = TestBed.get(MessageHubService);
    expect(service).toBeTruthy();
  });
});

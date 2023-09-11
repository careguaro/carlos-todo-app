import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be showLoading', () => {
    service.showLoading();
    expect(service['loading']).toBe(true);
  });

  it('should be hideLoading', () => {
    service.showLoading();
    service.hideLoading();
    expect(service['loading']).toBe(false);
  });

  it('should be isLoading', () => {
    service.showLoading();
    expect(service.isLoading()).toBe(true);
  });
});

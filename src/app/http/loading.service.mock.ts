import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingServiceMock {
  static getProvider() {
    return {
      provide: LoadingService,
      useFactory: () => LoadingServiceMock.instance(),
    };
  }

  static instance() {
    const instance = jasmine.createSpyObj('LoadingService', [
      'showLoading',
      'hideLoading',
      'isLoading'
    ]);
    instance.showLoading.and.returnValue({});
    instance.hideLoading.and.returnValue({});
    instance.isLoading.and.returnValue(true);
    return instance;
  }
}

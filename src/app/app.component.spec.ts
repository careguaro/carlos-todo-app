import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingServiceMock } from './http/loading.service.mock';
import { LoadingService } from './http/loading.service';

describe('AppComponent', () => {
  let loadingService: jasmine.SpyObj<LoadingService>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
    providers: [LoadingServiceMock.getProvider()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should isLoading', () => {
    loadingService = TestBed.inject<any>(LoadingService);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.isLoading();
    expect(loadingService.isLoading).toHaveBeenCalled();
  });
});

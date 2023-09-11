import { Component } from '@angular/core';
import { LoadingService } from './http/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly loadingService: LoadingService) {}

  isLoading(): boolean {
    return this.loadingService.isLoading();
  }
}

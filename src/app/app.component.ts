import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-example';

  joke: any;

  constructor(private readonly dataService: DataService) {

    this.dataService.getJoke().subscribe(data => {
      this.joke = data;
    });
  }
}

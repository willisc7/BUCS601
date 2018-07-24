import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  json = '';

  constructor(private weatherAPIService: WeatherApiService) { }

  getWeather(zipcode: string): void {

    // store response in json variable
    this.weatherAPIService.getWeather(zipcode)
      .subscribe(response => {
        this.json = JSON.stringify(response);
        console.log(response);
      })
  }
}

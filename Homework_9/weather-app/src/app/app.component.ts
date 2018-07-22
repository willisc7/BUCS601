import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private weatherAPIService: WeatherApiService){ }

  getWeather(zipcode: string): void {
    this.weatherAPIService.getWeather(zipcode)
    .subscribe(response => 
      console.log(response)
    )
  }
}

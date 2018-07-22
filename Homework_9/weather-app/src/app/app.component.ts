import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  forecast = '';

  constructor(private weatherAPIService: WeatherApiService){ }

/*   getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  } */

/*   getWeather(zipcode: string): void{
    this.weatherAPIService.getWeather(zipcode).subscribe(forecast);
  } */
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {

  private weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?';
  private apiKey = 'babcd9d6ee2c0cd746cc74adca113805';

  constructor(private http: HttpClient) { }

  getWeather(zipcode: string) {
    return this.http.get(this.weatherURL + 'zip=' + zipcode + ',us&APPID=' + this.apiKey)
  }
}
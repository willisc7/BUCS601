import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?';

  constructor() { }

/*   getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  } */

/*   getWeather (zipcode: string): {
     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  } */
}

//http://api.openweathermap.org/data/2.5/forecast?zip=ZIP_CODE,us&APPID=babcd9d6ee2c0cd746cc74adca113805

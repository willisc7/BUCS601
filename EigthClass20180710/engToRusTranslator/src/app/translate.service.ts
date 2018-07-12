import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})

export class TranslateService {
  constructor(private http: HttpClient) { }

  private google_translate_url = "https://translation.googleapis.com/language/translate/v2";

  translateText(source_text: string) {
    return this.http.post(this.google_translate_url, {
      q: source_text,
      target: 'ru',
      source: 'en'
    }
    , httpOptions)
  }
}
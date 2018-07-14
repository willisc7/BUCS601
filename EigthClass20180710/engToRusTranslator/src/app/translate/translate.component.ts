import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})

export class TranslateComponent implements OnInit {

  private searchTerms = new Subject<string>();
  private en_to_rus: string[][] = [
    ["hello", "Здравствуйте"],
    ["potato", "картошка"],
    ["fire", "Огонь"],
    ["fake news", "поддельные новости"],
    ["vodka", "водка"]
  ];
  dest_text = "";

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  translate(source_text: string): void {
    for (let i = 0; i < this.en_to_rus.length; i++) {
      const row = this.en_to_rus[i];
      for (var j = 0; j < row.length; j++) {
        if (j % 2 == 0) {
          if (row[j] == source_text) {
            this.dest_text = row[j + 1];
            console.log(row[j + 1]);
          }
        }
      }
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})

export class TranslateComponent implements OnInit {

  constructor(private translateService: TranslateService){
  }

  ngOnInit() {
    this.translate("hello");
  }

  translate(source_text: string): void {
    let response = this.translateService.translateText(source_text).subscribe();
    console.log(response);
  }
}
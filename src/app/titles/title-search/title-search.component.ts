import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.scss']
})
export class TitleSearchComponent implements OnInit {

  constructor(private service : TitleService) { }

  ngOnInit() {
  }

}

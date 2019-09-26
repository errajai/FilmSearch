import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  constructor(private service : TitleService) {
      
  }

  ngOnInit() {
    
  }

}

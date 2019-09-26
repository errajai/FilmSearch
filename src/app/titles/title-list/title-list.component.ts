import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/shared/title.model';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss']
})
export class TitleListComponent implements OnInit {

  resultTitle: Title[];
  
  constructor(private service : TitleService) {
    
  }

  ngOnInit() {
    this.service.initialzeList();
  }

}

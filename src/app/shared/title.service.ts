import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from './title.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  readonly url :string =  "http://localhost:3000/titles";
  listTitle : Title[];
  searchResult : Title[];
  constructor(private http : HttpClient) { }

  getAllTitles():Observable<Title[]>{
    return this.http.get<Title[]>(this.url);
  }

  initialzeList(){
    this.getAllTitles().subscribe(data =>{
      this.searchResult = this.listTitle = data as Title[];
    });
  }

  refreshList(){
    this.searchResult = this.listTitle;
  }

  getTitles(primaryTitle: string, originalTitle: string, startYear: string){

    this.refreshList()
    if(typeof primaryTitle != 'undefined'){
      if(primaryTitle){
        this.searchResult = this.searchResult.filter(item => item.primaryTitle === primaryTitle);
      }
    }
   
    if(typeof originalTitle != 'undefined'){
      if(originalTitle){
        this.searchResult = this.searchResult.filter(item => item.originalTitle === originalTitle);
      }
    }

    if(typeof startYear != 'undefined'){
      if(startYear){
        this.searchResult = this.searchResult.filter(item => item.startYear === startYear);
      }
    }
  }

}

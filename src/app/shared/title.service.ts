import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from './title.model'
import { Observable, BehaviorSubject,Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  readonly url :string =  "http://localhost:3000/titles";
  listTitle : Title[];
  searchResult : Title[];

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  dataSource: MatTableDataSource<Title>;

  constructor(private http : HttpClient) {   }

  getAllTitles():Observable<Title[]>{
    return this.http.get<Title[]>(this.url);
  }

  initialzeList(){
    this.loadingSubject.next(true);
    this.getAllTitles()
    .subscribe(data =>{
      this.searchResult = this.listTitle = data as Title[];
      this.loadingSubject.next(false);
      this.dataSource.data = data;
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
    this.dataSource.data = this.searchResult;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from 'src/app/shared/title.model';
import { TitleService } from 'src/app/shared/title.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss']
})
export class TitleListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Year', 'Genre', 'edit'];
  //dataSource: MatTableDataSource<Title>;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  
  constructor(private service : TitleService, private matDialog: MatDialog) {
    this.service.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.service.initialzeList();
  }

  ngAfterViewInit() {
    this.service.dataSource.paginator = this.paginator;
  }
  updateTitle(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "350px";
    dialogConfig.width = "450px";
    dialogConfig.data = item;
    this.matDialog.open(UpdateModalComponent,dialogConfig)
  }

}

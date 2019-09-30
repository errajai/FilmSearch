import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Title } from '@angular/platform-browser';
import { TitleService } from 'src/app/shared/title.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {

  title:Title;

  constructor(public dialogRef: MatDialogRef<UpdateModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private service : TitleService,private toastr : ToastrService) {
    console.log(data);
    this.title = data as Title
   }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close("Updated");
  }

  update(title:any,titleRef:HTMLInputElement,genre:HTMLInputElement,year:HTMLInputElement){
    title.primaryTitle = title.originalTitle = titleRef.value;
    title.genres = genre.value;
    title.startYear = year.value;
    let index = this.service.searchResult.findIndex(i => title.tconst == i['tconst']);
    this.service.searchResult[index] = title;
    this.toastr.success('Film updated successfully','Success');
    this.close();

  }

}

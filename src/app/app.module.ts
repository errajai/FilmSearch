import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, MatTableModule, MatProgressSpinnerModule  } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import { TitleSearchComponent } from './titles/title-search/title-search.component';
import { TitleListComponent } from './titles/title-list/title-list.component';
import { UpdateModalComponent } from './titles/update-modal/update-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    TitleSearchComponent,
    TitleListComponent,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDividerModule,
    ToastrModule.forRoot()
  ],
  exports:[
    MatDialogModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  entryComponents: [
    UpdateModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

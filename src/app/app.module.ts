import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import {Sort,  MatSortHeader} from '@angular/material';
import { DisplayComponent } from './display/display.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { StudentComponent } from './student/student.component';
import { FileSaverModule } from 'ngx-filesaver';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; 
import {ExcelService} from './excel.service'
import { OrderModule } from 'ngx-order-pipe';

const appRoutes: Routes =[
  {path: 'display-users',component:DisplayComponent},
  {path: 'add-users',component:StudentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DisplayComponent,
    MatSortHeader,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FileSaverModule
  
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

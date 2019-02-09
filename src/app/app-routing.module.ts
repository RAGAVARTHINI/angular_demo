import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { StudentComponent } from './student/student.component';


const appRoutes: Routes =[
  {path: 'display-users',component:DisplayComponent},
  {path: 'add-users',component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

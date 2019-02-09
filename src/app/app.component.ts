import { Component } from '@angular/core';
import { User, UsersNew } from './user';
import { EnrollmentService } from './enrollment.service';
import{ExcelService}from './excel.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';

  courses =['Computer Science and Engineering','Mechanical Engineering','Electronics and Communication Engineering','Electrical and Electronics Engineering','PetroChemical Engineering'];
//UserModel= new User('raga','varthiniraga110@gmail.com',555555555,'',true);
constructor(private enrollementService: EnrollmentService){}



}

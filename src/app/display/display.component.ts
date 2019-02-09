import { Component, OnInit } from '@angular/core';
import { UsersNew } from '../user';
import { EnrollmentService, Users, User1 } from '../enrollment.service';
import{ExcelService} from '../excel.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  Users;
  key:"name";
  reverse;
  thisUser=UsersNew;
  User=UsersNew;

editUser:boolean = false;
  courses =['Computer Science and Engineering','Mechanical Engineering','Electronics and Communication Engineering','Electrical and Electronics Engineering','PetroChemical Engineering'];
  states=["tamilnadu","andhrapradesh","gujarat","kerala"];
  cityTN=["Coimbatore","Chennai","Salem"];
  cityAP=["Hyderabad","Amaravati","tirupathi"];
  cityG=["Ahmedabad","Rajkot","Gandhinagar"];
  cityK=["Palakkad","thrissur","vadakara"];
  constructor(private _enrollmentService:EnrollmentService,private excelService:ExcelService){
    
  }

  ngOnInit() {
    this.Users=this._enrollmentService.getUser();
  }
delete_user(user,i)
{ 
if(window.confirm("Are you sure you want to delete"+" "+(user.userFirstName))){
 User1.splice(i,1);
}  
}

edit_user(user):void
{
this.editUser=true;
this.thisUser=user;

}
updateUser(updateform)
{
  this.thisUser=null;
  this.editUser=false;
}
sort(key){
  this.key = key;
  this.reverse = !this.reverse;
}
exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.User,'sample');
}
}
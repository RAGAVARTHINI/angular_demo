import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  submitted = false;
  tempphone;
  formatted;
  
  flag = false;
  courses = ['Computer Science and Engineering', 'Mechanical Engineering', 'Electronics and Communication Engineering', 'Electrical and Electronics Engineering', 'PetroChemical Engineering'];
  states = ["tamilnadu", "andhrapradesh", "gujarat", "kerala"];
  cityTN = ["Coimbatore", "Chennai", "Salem"];
  cityAP = ["Hyderabad", "Amaravati", "tirupathi"];
  cityG = ["Ahmedabad", "Rajkot", "Gandhinagar"];
  cityK = ["Palakkad", "thrissur", "vadakara"];
  temp: string;
  user={};
  user1: EnrollmentService;
  users1;

  constructor(private router: Router, private _enrollmentService: EnrollmentService) { }

  ngOnInit() {
    this.users1 = this._enrollmentService.getUser();

  }
  structure(phone: string, test: string) {
      if(phone.length==10)
      this.tempphone= "+91-" + phone.slice(0, 3) + "-" + phone.slice(3, 7) + "-" + phone.slice(7);
  }

  onSubmit(userForm): void {
    this.submitted = true;
    this.users1.push(userForm.value);
    this.router.navigate(['../display-users']);
  }

}

import { Injectable } from '@angular/core';
import {UsersNew} from './user'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  public userFirstName: string;
  public userLastName:string;
  public dateofbirth:Date;
  public stateName:string;
  public cityName:string;
        public email:string;
        public phone:number;
        public course:string;
        public scholarship:boolean;

 getUser()
    {
      return User1;
    }
  }
  export const User1 =UsersNew;
export const Users=UsersNew;
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/UserService';
import{Admin} from '../models/Admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
username;
password;
admin:Admin;
logins;
result;
  constructor(private service:UserService) {
    this.admin=new Admin();
    this.logins=[];
    this.admin.AdminID="A1";
   }
   login(){
     
    console.log(this.admin.Passwords);
    this.service.getAdminLogin(this.admin).subscribe((data)=>{
      console.log(data);
      console.log("success");
      this.result="Logged In";
      this.admin=new Admin();
    })
    this.result="Incorrect User or password";
    this.admin.Passwords=null;
    
  }

  ngOnInit(): void {
  }

}

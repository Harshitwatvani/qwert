import { Component, OnInit } from '@angular/core';
import{ User } from '../models/User';
import { UserService } from '../services/UserService';


@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {

  user:User;
  users:User[];
  constructor(private userService:UserService) { 
    this.user=new User();
    this.users=[];
  }
addUser(){
  console.log("qwerty");
  this.userService.addUser(this.user).subscribe((data)=>{
    console.log(data);
  })
  this.user=new User();
}
reset(){
  this.user=new User();
}
  ngOnInit(): void {
  }

}

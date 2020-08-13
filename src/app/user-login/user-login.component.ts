import { Component, OnInit } from '@angular/core';
import{ User } from '../models/User';
import { UserService } from '../services/UserService';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username;
  password;
  logins;
  result;
  user:User;

  constructor(private service:UserService) {
    this.logins=[];
    this.user=new User();
      //this.login=new User();
  }
  login(){
     
    console.log(this.user.Password);
    this.service.getUserLogin(this.user).subscribe((data)=>{
      console.log(data);
      console.log("success");
      this.result="Logged In";
      this.user=new User();
    
    })
    this.result="Incorrect User or password";
    this.user.Password=null;
    
  }
  // checkLogin(){
  //   this.service.getUser().subscribe((data)=>{
  //     console.log(data);
  //     this.logins=data;
  //     for(let index =0;index<this.logins.length;index++){
  //       if(this.logins[index].Email==this.username&&this.logins[index].Password==this.password)
  //       {
  //        this.result="Logged in";
  //        console.log(this.result);
 
  //     this.login();
  //     this.password=null;
 
 
  //       }
  //       else{
  //         this.result="Invalid username or Password";
  //       }
       
  //     }
  //   })
  // this.logins.forEach(element => {
  //   if(element.Email==this.username&&element.Password==this.password)
  //   this.result="Logged in";
  // });
  // console.log(this.result);
    //  for(let index =0;index<this.logins.length;index++){
    //    if(this.logins[index].Email==this.username&&this.logins[index].Password==this.password)
    //    {
    //     this.result="Logged in";
    //     console.log(this.result);

    //  this.login();
    //  this.password=null;


    //    }
      
    //  }
     

  //}

  ngOnInit(): void {
  }

}

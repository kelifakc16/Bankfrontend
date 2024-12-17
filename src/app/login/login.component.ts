import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


 
  loginForm:FormGroup;
  // userService: any;
  constructor (private formBuilder:FormBuilder,
    private userService:UserService){}
  
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[""],
      password:[""]
    })

    
  
  }
  login():void{
  const user =this.loginForm.value;
  this.userService.login(user).subscribe((user:User) => {
    if(user.userId){
      console.log('login success');
    }else{
      console.log('invalid username and password');
    }
    
    
}) 
}}

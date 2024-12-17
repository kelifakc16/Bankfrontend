import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlStatus, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
 signUpForm:FormGroup;

 constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      accountHolderName:[''],
      accountid:['']
    
    })
  
  }
  signUp():void{
   console.log(this.signUpForm.value);
  }
}

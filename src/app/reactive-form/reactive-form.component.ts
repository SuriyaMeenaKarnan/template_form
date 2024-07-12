import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  
  registrationForm!: FormGroup;

  gender = "male";

  countries: any[] = ["India", "Australia", "Japan", "USA", "France"];

  genderAll = ['Male', 'Female', 'Others']

  countryCode = ["+91", "+0", "+1"];

  defaultCode = "+91";

  defaultCountry = "";

  namePattern = "^[a-z]+$";

  phonePattern = "^[0-9]*$";

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern(this.namePattern),Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phoneCode: [this.countryCode[1]],
      phone: ["", [Validators.required,  Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.phonePattern)]],
      dob: ["", [Validators.required]]
  });
    
  }

  submitVal(formVal: any){
    console.log(formVal)
  }
}

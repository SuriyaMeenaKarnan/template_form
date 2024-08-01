import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../confirm-password.validator';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  
  registrationForm!: FormGroup;

  checkGender:string = 'Male';

  countries: string[] = ["India", "Australia", "Japan", "USA", "France"];

  genderAll:string[] = ['Male', 'Female', 'Others']

  countryCode:string[] = ["+91", "+0", "+1"];

  defaultCode:string = "+91";

  defaultCountry:string = "";

  namePattern = new RegExp(/^[A-Za-z][A-Za-z\s]*$/);

  phonePattern:string = "^[0-9]*$";

  passPattern:string = '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":]).+$';

  constructor(private fb: FormBuilder, private route: Router, private aRoute:ActivatedRoute){

  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern(this.namePattern),Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phoneCode: [this.countryCode[1]],
      phone: ["", [Validators.required,  Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.phonePattern)]],
      dob: ["", [Validators.required]],
      gender: ["Male"],
      address: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(10)]], 
      pass:["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.passPattern)]],
      country: ["0", [Validators.required]],
      agree: ["", [Validators.requiredTrue]],
      cPass: ["", [Validators.required]],
      
  },
  {validators:confirmPasswordValidator} as  AbstractControlOptions
);
    
  }

  storedData(){
    console.log(this.localStorageData);
  }

  // localStorageData = localStorage.getItem('users');
  // localStorageData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  localStorageData:any[]  = JSON.parse(localStorage.getItem('users') || '[]');

  // localStorageData:any[] = [1];

  submitVal(formVal: any){
    console.log(formVal);
    // let localStorageData;
    let arr = new Array();
    arr.push(this.registrationForm.value);
    console.log("arr ", arr);
    this.localStorageData.push(this.registrationForm.value);
    console.log(this.localStorageData);
    localStorage.setItem('users', JSON.stringify(this.localStorageData));
    this.route.navigate(['/login']);    
  }
}

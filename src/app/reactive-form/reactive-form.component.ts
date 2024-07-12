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

  countryCode: any[] = ["+91", "+0", "+1"];

  defaultCode = "+91";

  defaultCountry = "";

  namePattern = "^[a-z]+$";

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern(this.namePattern),Validators.minLength(3)]],
      email: ""
  });
    new FormGroup({
      username: new FormControl(""),
      email: new FormControl("")
    })
  }

  submitVal(formVal: any){
    console.log(formVal)
  }
}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../confirm-password.validator';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth-module/authService/auth.service';
import { CommonServiceService } from '../common/common-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnChanges{
  
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

  constructor(private fb: FormBuilder, private route: Router, private aRoute:ActivatedRoute, private authService: AuthService, private cmnService:CommonServiceService,
    public snackBar: MatSnackBar,
  ){

  }

  ngOnChanges(changes: SimpleChanges): void {
   
  }

  countryName(val:any){
    const countryy = <FormControl>this.registrationForm.get('country');
    let nationality = <FormControl>this.registrationForm.get('nationality');
    // console.log(val.value.country);
    
    if(countryy.value == "India"){      
      nationality.setValidators([Validators.required])     
      nationality.updateValueAndValidity() 
    }
    else{
      nationality.setValidators(null)     
      nationality.updateValueAndValidity() 
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern(this.namePattern),Validators.minLength(3)]],
      email: [""],
      phoneCode: [this.countryCode[1]],
      phone: [""],
      dob: [""],
      gender: ["Male"],
      address: [""], 
      pass:[""],
      country: ["0"],
      agree: [""],
      cPass: [""],
      nationality: [""]
    })

//     this.registrationForm = this.fb.group({
//       username: ["", [Validators.required, Validators.pattern(this.namePattern),Validators.minLength(3)]],
//       email: ["", [Validators.required, Validators.email]],
//       phoneCode: [this.countryCode[1]],
//       phone: ["", [Validators.required,  Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.phonePattern)]],
//       dob: ["", [Validators.required]],
//       gender: ["Male"],
//       address: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(10)]], 
//       pass:["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(this.passPattern)]],
//       country: ["0", [Validators.required]],
//       agree: ["", [Validators.requiredTrue]],
//       cPass: ["", [Validators.required]],
//       nationality: [""]
//   },
//   {validators:confirmPasswordValidator} as  AbstractControlOptions
// );
    
  }

  status:boolean = true;

  submitVal(formVal: any){
    let userDetails = JSON.parse(this.cmnService.getItems("users")  || "[]" );
    
    let status = this.cmnService.checkUserExist(formVal.value)
    console.log("status",status);

    if(status){
      alert('already exists')
    }
    else{
      userDetails.push(formVal.value)
      this.cmnService.setItems(userDetails,'users')
    }
    
    let filterArr = []
                    
      // if(userDetails.length > 1){
      //   for(let i=0; i<userDetails.length; i++){

      //     console.log(userDetails)
      //     if(userDetails[i].username == formVal.value.username){
      //       alert("already exist");
      //     }
      //     else{
      //       userDetails.push(formVal.value);
      //       this.cmnService.setItems(userDetails, "users");
      //     }
      //   }    
      // }
      // else{
      //       userDetails.push(formVal.value);
      //       this.cmnService.setItems(userDetails, "users");
      // }
      
  }

}

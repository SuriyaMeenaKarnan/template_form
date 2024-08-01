import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private route: Router, private activeRoute: ActivatedRoute, public snackBar: MatSnackBar){}


  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        pass: ["", [Validators.required]]
      }
    )
  }

  loginSubmit(val:any){
    console.log(val.value);
    let getData = JSON.parse(localStorage.getItem('users') || '[]');  
    
    const snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.verticalPosition = 'top'; 

    if(getData){
      getData = getData.map((each:any) => {
          if(each.email === val.value.email && each.pass === val.value.pass){
            // console.log("Login successfully");
            this.route.navigate(['\profile']);
            this.snackBar.open("Login Successfully", "X", {duration: 1000});
          }
          else{
            this.snackBar.open("You're need to registered", "X", {duration: 1000});
            // console.log("you are not registered")
          }
      })
    }
        
  }

  


}

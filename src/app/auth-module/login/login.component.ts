import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private route: Router, private activeRoute: ActivatedRoute, public snackBar: MatSnackBar, private authService:AuthService){}


  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        pass: ["", [Validators.required]]
      }
    )
  }

  status:Boolean = true;

  loginSubmit(val:any){
    // let getData = JSON.parse(localStorage.getItem('users') || '[]');  

    
    
    const snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.verticalPosition = 'top'; 

    let loginData = {
      email: val.value.email,
      pass: val.value.pass
    }

    // this.authService.login(loginData);

    if(loginData.email && loginData.pass){
      this.authService.login(loginData);
    }
    else{
      this.snackBar.open("Fill the details", "X", {duration: 1000});
    }

    // if(getData){
    //   getData = getData.map((each:any) => {
    //     console.log("local storage mail and password ", each.email, each.pass)
    //     console.log("from form ", val.value.email, val.value.pass)
    //       if(each.email == val.value.email && each.pass == val.value.pass){
    //         // console.log("Login successfully");
            

            
    //         alert("login")
    //         this.snackBar.open("Login Successfully", "X", {duration: 1000});
    //         this.route.navigate(['/profile']);
    //         this.status = false;
    //       }
    //       else{            
    //         if(this.status){
    //           alert("else login")
    //         this.snackBar.open("You're need to registered", "X", {duration: 1000});
    //         this.status = false;
    //         }
    //         // console.log("you are not registered")
    //       }
    //   })
    // }
        
  }

  


}

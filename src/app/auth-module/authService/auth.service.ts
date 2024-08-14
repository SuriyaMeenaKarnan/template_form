import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  count = 0;

  status:Boolean = true;
  constructor(public snackBar: MatSnackBar, private route: Router) { }

  login(data: any){
    // console.log("service data", data);

    let getData = JSON.parse(localStorage.getItem('users') || '[]');

    if(getData){

      // getData = getData.map((each:any) => {
      //     if(each.email == data.email && each.pass == data.pass){
      //       return this.route.navigate(['/profile'])
      //     }
      //     else{            
      //       if(this.status){
      //         alert("else login")
      //       this.snackBar.open("You're need to registered", "X", {duration: 1000});
      //       this.status = false;
      //       }
      //       console.log("you are not registered")
      //     }
      // })
    }
  }
  
}

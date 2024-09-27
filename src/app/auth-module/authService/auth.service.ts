import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  count = 0;

  status:Boolean = true;
  constructor(public snackBar: MatSnackBar, private route: Router,private http: HttpClient) { }

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

  public getBase64Image(imagePath: string): Observable<any> {
    return this.http.get(imagePath, { responseType: 'blob' }).pipe(
      map(blob => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            console.log("base64data",base64data)
            resolve(base64data);
          };
          reader.onerror = error => reject(error);
          reader.readAsDataURL(blob);
        });
      })
    );
  }



  getImage(imagePath:string){
    return new Promise((resolve,reject)=>{
      console.log("Promise");
      this.http.get(imagePath, { responseType: 'blob' }).pipe(
        map(blob => {
          const reader = new FileReader();
          console.log("reader",reader);
          
          reader.onloadend = () => {
            const base64data = reader.result as string;
            console.log("base64data",base64data)
            reader.onerror = error => reject(error);          
            resolve(reader.readAsDataURL(blob));
          };
        })
      )
    })
  }
}

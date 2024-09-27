import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileExportService {

  constructor(private http: HttpClient) { }

  getImageData(imagePath: string){
    return new Promise((resolve,reject)=>{
      let data1 = this.getBase64Image(imagePath).subscribe(async(data:any)=>{            
        let base64Image = await data;                
        data1.unsubscribe()
        resolve(base64Image)
      })
    })
  }

  // CONVERT IMAGE ASSET TO BASE64
  public getBase64Image(imagePath: string): Observable<any> {
    return this.http.get(imagePath, { responseType: 'blob' }).pipe(
      map(blob => {
        return new Promise<string>((resolve, reject) => {
          const reader       = new FileReader();
          reader.onloadend   = () => {
            const base64data = reader.result as string;            
            resolve(base64data);
          };
          reader.onerror = error => reject(error);
          reader.readAsDataURL(blob);
        });
      })
    );
  }
}

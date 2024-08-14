import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  setItems(datas:any, storageName:string){ 
    return localStorage.setItem(storageName, JSON.stringify(datas));
  }

  getItems(storageName:string){
    return localStorage.getItem(storageName);
  }


  checkUserExist(formValue:any):boolean{
    let status = false;
    console.log("checkUserExist formValue",formValue);        
    let userList = JSON.parse(this.getItems('users') || "[]" );
    console.log("getItems",userList)
    if(userList?.length > 0 ){
      // let filterData:any = userList.filter((data:any)=>{
      //   return data.username == formValue.username
      // })
      // filterData.length > 0 ? status = true : status = false      

      for(let i=0;i<userList.length;i++){
        if( userList[i].username == formValue.username ){
          status = true;
          break;
        }
        else{
          status = false;
        }
      }
      return status
    }
    else{
      return status
    }    
  }  
}

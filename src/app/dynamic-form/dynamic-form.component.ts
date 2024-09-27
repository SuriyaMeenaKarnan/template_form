import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup;  //defined the dynamicFormGroup

  // isEachFormVal:boolean = false;

  // userDetails: any[] = [];

  mobileNoPattern = new RegExp(/\b\d{10}\b/);

  allData: any[]= [];

  eachFormvalues : any;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      personalDetails: this.formBuilder.array([])
    })
  }
  

  addFormRow(){
    const personalDataForm = this.formBuilder.group({
      // , Validators.required
      userName: [''],
      phone: ['', [Validators.required, Validators.pattern(this.mobileNoPattern)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['']
    }) 

    this.userDetails.push(personalDataForm);
  }

  get userDetails(): FormArray{
    return this.dynamicForm.get('personalDetails') as FormArray;
  }
 
  formVal(allVal:any){
    // this.allData.push(allVal);
    let data = [];
    // data = allVal
    this.allData = this.dynamicForm.controls.personalDetails.value;
    console.log(this.allData[0].userName);
  }

  eachFormVal(index:number){  
    this.eachFormvalues = this.userDetails.controls[index].value;
    console.log(this.eachFormvalues);

  }
  
  // onTyping(index:number){
  //   let detailsObj:any[] = [];
  //   let count = 0;

  //   detailsObj.push(this.userDetails);

  //   console.log('index',index)
  //   detailsObj.map((eachObj) => {
  //     let objVal = Object.values(eachObj.controls[index].value);
  //     let countVal = objVal.filter((eachObjVal) => {
  //         return eachObjVal != ""
  //     });

  //     if(countVal.length >= 2){
  //       this.isEachFormVal = true;
  //     }
  //     else{
  //       this.isEachFormVal = false;
  //     }
  //   });
  // }
}

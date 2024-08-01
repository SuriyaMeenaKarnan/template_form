import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  countries: any[] = ["India", "Australia", "Japan", "USA", "France"];

  countryCode: any[] = ["+91", "+0", "+1"];

  gender = "male";

  defaultCode = "+91";

  defaultCountry = "";

  submitVal(data: any){    
    console.log(data);
  }
}

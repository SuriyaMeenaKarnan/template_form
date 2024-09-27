import { Component, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  title = 'template_form';
  // gender:string="";
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'downloadFile', // the id of html/table element
  }
  
  readonly panelOpenState = signal(false);
  constructor(private exportAsService: ExportAsService){
    
  }
  ngOnInit(): void {
    
  }

  handleSpacebar(ev:any) {
    if (ev.keyCode === 32) {
      ev.stopPropagation();
      ev.preventDefault();
    }
   }

   
   export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }
 
}



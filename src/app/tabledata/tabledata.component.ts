import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { AuthService } from '../auth-module/authService/auth.service';


@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent {
  textContent = '';

  tableDataCols:any = ["RootName","Inside Name","Description","Status"]
  tableData: any = [
    {
      rootName: "Test",
      insideData: [
        {
          name: "1",
          desc: "jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "2",
          desc: "2jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "3",
          desc: "3jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        }
      ]
    },
    {
      rootName: "Test1",
      insideData: [
        {
          name: "11",
          desc: "11jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "12",
          desc: "12jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "13",
          desc: "13jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        }
      ]
    },
    {
      rootName: "Test3",
      insideData: [
        {
          name: "11",
          desc: "11jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "12",
          desc: "12jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "13",
          desc: "13jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        }
      ]
    },
    {
      rootName: "Test4",
      insideData: [
        {
          name: "11",
          desc: "11jorew hhewir wenfdwshrf oweu fdsa",
          status: false
        },
        {
          name: "12",
          desc: "12jorew hhewir wenfdwshrf oweu fdsa",
          status: true
        },
        {
          name: "13",
          desc: "13jorew hhewir wenfdwshrf oweu fdsa",
          status: false
        }
      ]
    }
  ]

  constructor(private authService : AuthService ){}

  download(){
    // console.log("download")
    this.generatePdf(this.tableData, this.tableDataCols, 'table-data');

  }

  public async generatePdf(tableData: any[], columns: string[], fileName: string) {
    const doc = new jsPDF();
    
    const title = 'Risk Report AI';
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    const titleWidth = doc.getTextWidth(title);
    const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    const titleY = 15; // Y-coordinate for the title
    doc.text(title, titleX, titleY);
  
    // Adjust the Y-coordinate for the table to avoid overlap with the title
    const tableMargin = 10; // Adjust this margin as needed
    const startY = titleY + 10 + tableMargin; // Title height + margin
  
    const rows: any[] = [];
    tableData.forEach((item: any) => {
      item.insideData.forEach((insideItem: any, index: number) => {
        const row: any[] = [];
        if (index === 0) {
          row.push({ content: item.rootName, rowSpan: item.insideData.length, styles: { valign: 'middle' } });
        }   
        row.push(insideItem.name); // Inside Name
        row.push(insideItem.desc); // Description
        row.push(insideItem.status ? 'Active' : 'Inactive'); // Status  
        rows.push(row);
      });
    });
  
    autoTable(doc, {
      head: [columns], // Column headers
      body: rows,      // Table body
      startY: startY,  // Starting position for the table
      theme: 'grid',   // Structured look with grid lines
      headStyles: {
        fillColor: [0, 102, 204], // Dark blue for header background
        textColor: [255, 255, 255], // White text color for headers
        fontStyle: 'bold',
        halign: 'center', // Center-align the table headers
      },
      didDrawCell: (data: any) => {
        if (data.column.index === columns.indexOf('Status')) {          
          const cell = data.cell;          
          if (cell.raw === "Active" ) {
            console.log('Active')
            cell.styles.fillColor = [0, 255, 0]; // Green
            cell.styles.textColor = [0, 0, 0]; // Black text color for "Active"
          } else if (cell.raw == "Inactive") {
            cell.styles.fillColor = [255, 0, 0]; // Red
            cell.styles.textColor = [255, 255, 255]; // White text color for "Inactive"
          }
        }
      },
    });
    
    
    let data1 = this.authService.getBase64Image('assets/images/logo.png').subscribe(async(data:any)=>{            
      let base64Image = await data;
      const pageHeight = doc.internal.pageSize.height;
      const footerHeight = 60; // Ensure enough space for the footer
      const logoWidth    = 40;
      const logoHeight   = 40;
      const logoX = (doc.internal.pageSize.getWidth() - logoWidth) / 2;
      const logoY = pageHeight - footerHeight + 5;
      doc.addImage(base64Image, 'PNG', logoX, logoY, logoWidth, logoHeight);
      doc.save(`${fileName}.pdf`);
      data1.unsubscribe()  
    })
  }

  adjustHeight(textarea: HTMLTextAreaElement) {
    if(textarea.scrollHeight <= 500){
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    }
  }

}

import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-multiple-selectin-menu',
  templateUrl: './multiple-selectin-menu.component.html',
  styleUrls: ['./multiple-selectin-menu.component.scss']
})
export class MultipleSelectinMenuComponent {

  planData: any = [
    {
      name: 'plan1',
      days: [
        {
          a: 10,
          status: false
        },
        {
          b: 20,
          status: false
        },
        {
          c: 30,
          status: false
        },
        {
          d: 40,
          status: false
        }
      ],
    },
    {
      name: 'plan2',
      days: [
        {
          a: 5,
          status: false
        },
        {
          b: 10,
          status: false
        },
        {
          c: 20,
          status: false
        },
        {
          d: 45,
          status: false
        },
      ],
    },
    {
      name: 'plan3',
      days: [
        {
          a: 1,
          status: false
        },
        {
          b: 5,
          status: false
        },
        {
          c: 6,
          status: false
        },
        {
          d: 10,
          status: false
        }
      ],
    },
  ];

  myValue(i:number, j:number, e?:any){     

      this.planData[i].days[j].status = !this.planData[i].days[j].status;

    // let a = this.planData.map((f:any, i:number) => {
    //     f.days.map((h:any, j:number) => {
    //         return j;
    //     })
    // })
    // console.log(a);
    
    // switch(i){
    //   case 0:
    //     // this.swithFun(0)
    //     console.log("first row values ", this.swithFun(0));
    //   break;

    //   case 1:
    //     // this.swithFun(0)
    //     console.log("2nd row values ", this.swithFun(1));
    //   break;

    //   case 2:
    //     // this.swithFun(0)
    //     console.log("3rd row values ", this.swithFun(2));
    //   break;
    // }
    
  }

  swithFun(caseVal:number){
    let dayA:any = [];

    this.planData[caseVal].days.map((e:any) => {
      if(e.status){
        dayA.push(Object.values(e));
      }
      return dayA;
    })
    let tempA:any = [];
    dayA.forEach((e:any) => {
      
      tempA.push(e[0]);
    });

    return tempA;
  }

  submit(i:number){
    switch(i){
      case 0:
        // this.swithFun(0)
        console.log("first row values ", this.swithFun(0));
      break;

      case 1:
        // this.swithFun(0)
        console.log("2nd row values ", this.swithFun(1));
      break;

      case 2:
        // this.swithFun(0)
        console.log("3rd row values ", this.swithFun(2));
      break;
      
    }
  }

  amphibians:Animal[] = [
    new Animal('Sonoran desert toad',false),
    new Animal('Western toad',false),
    new Animal('Arroyo toad',false),
    new Animal('Yosemite toad',false),
  ];

  selectAnimal($event:any, animal:Animal) {
    // prevent menu from closing
    $event.stopPropagation();
    $event.preventDefault();
    // toggle selected state on clicked animal
    animal.selected = !animal.selected;
    // update selection vars
    this.updateSelectedAnimals();
  }

  selectedAmphibianCount = 0;

  updateSelectedAnimals() {
    // get count by type
    this.selectedAmphibianCount = this.amphibians.filter( a => a.selected ).length;
  }
    
  
}

export class Animal {
  constructor(
    public name: string,
    public selected: boolean
  ) {}
}


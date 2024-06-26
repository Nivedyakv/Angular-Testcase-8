import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableData = [
    { name: 'Nivedya kv', title: 'Software engineer', status: 'Active', position: 'Senior' },
    { name: 'Jyothka k nair', title: 'Consultant', status: 'Onboarding', position: 'Junior' },
    { name: 'Shabana MH', title: 'Designer', status: 'Awaiting', position: 'Senior' }
  ];
 
  showTable: boolean = false;

  colOneColor: boolean = false;
  colTwoColor: boolean = false;
  colThreeColor: boolean = false;
  colFourColor: boolean = false;

  toggleTable() {
    this.showTable = !this.showTable;
  }

  changeColumnColor(column: string) {
    switch(column) {
      case 'col-one':
        this.colOneColor = !this.colOneColor;
        break;
      case 'col-two':
        this.colTwoColor = !this.colTwoColor;
        break;
      case 'col-three':
        this.colThreeColor = !this.colThreeColor;
        break;
      case 'col-four':
        this.colFourColor = !this.colFourColor;
        break;
      default:
        break;
    }
  }
}

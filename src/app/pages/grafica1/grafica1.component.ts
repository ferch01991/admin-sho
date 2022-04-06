import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = [ 'dona1', 'dona2', 'dona3' ];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 20, 50, 10 ],
        backgroundColor: [ '#FF6234', '#36A2EB', '#65FF67' ], },
    ],
  };

}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }

  // Recibe una propiedad desde el padre con @Input
  // 'valor' renombra el percent
  // @Input('valor') percent: number = 40;
  @Input() percent: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  changeProgress(valor: number) {
    console.log(valor, this.percent);
    if (this.percent>=100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.percent = 100;
    }
    if (this.percent <= 0 && valor <= 0) {
      this.valorSalida.emit(0);
      return this.percent = 0;
    }
    this.percent = this.percent + valor;
    this.valorSalida.emit(this.percent);
    return;
  }

  onChange(valor: number) {
    if (valor >= 100) {
      this.percent = 100;
    }else if (valor <= 0) {
      this.percent = 0;
    }else {
      this.percent = valor;
    }
    this.valorSalida.emit(this.percent);
  }

}

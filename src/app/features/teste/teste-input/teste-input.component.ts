import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-teste-input',
  templateUrl: './teste-input.component.html',
  styleUrls: ['./teste-input.component.css']
})
export class TesteInputComponent implements OnInit {

  @Input() teste = '';
  @Input() data = '';

  @Output() clicked = new EventEmitter();

  public qtdClick = 0;


  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.qtdClick ++;
    this.clicked.emit(this.qtdClick);
  }
}

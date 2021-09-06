import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  public data = '201-05-050';

  public isClicked = false;
  public qtdCliced = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public onClicked(qtdClick: number) {
    this.qtdCliced = qtdClick;
    this.isClicked = true;
  }

}

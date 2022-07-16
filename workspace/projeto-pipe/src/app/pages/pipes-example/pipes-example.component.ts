import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'hello world!';
  date =new Date();
  pessoa = {
    nome:'Fernando',
    idade:30,
    doadorSangue: false,
  }

  constructor(private upperCasePipe: UpperCasePipe){}
 
  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto';
  }

}

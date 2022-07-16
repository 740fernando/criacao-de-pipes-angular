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

  nomes = ['Fernando', 'Lauren','Gabriel']

  constructor(private upperCasePipe: UpperCasePipe){}
 
  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValorString() {
    this.text = 'novo texto';
  }
  mudaValorNumber() {
    this.number++;
  }

  add(text:string){
    this.nomes.push(text);
  }
}

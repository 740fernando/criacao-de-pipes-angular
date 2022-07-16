import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number= 0;
  text = 'hello World!'
  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text= this.upperCasePipe.transform(this.text)
  }
  adicionaNumber(){
    this.number++;
  }
  mudaTexto(txt:string){
    this.text=txt;
  }

}

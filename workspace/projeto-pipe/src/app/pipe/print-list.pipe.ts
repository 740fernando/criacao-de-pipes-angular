import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure:false
})
export class PrintListPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {
    let returnString = '';
    if(value.length){
      value.forEach(val => {
        returnString =  returnString+ ' '+ val;
      });
    }
    return returnString;
  }
}

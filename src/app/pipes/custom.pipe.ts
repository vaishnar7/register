import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args,"args")
    if(args[0]==value){
      return "SpecialCase";
    }
    return "name="+value;
  }

}

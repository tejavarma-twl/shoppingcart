import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const temp = [];
    if (args === ''){
      return value;
    }
    for(const i in value){
      if (value[i].includes(args)){
        temp.push(value[i]);
      }
    }
    return temp;
  }

}

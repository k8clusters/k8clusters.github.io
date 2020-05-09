import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyjson'
})
export class PrettyjsonPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return JSON.stringify(value, null, 2)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  }

}

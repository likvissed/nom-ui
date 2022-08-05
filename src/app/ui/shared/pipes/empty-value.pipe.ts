import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameEmpty"
})
export class EmptyValuePipe implements PipeTransform {
  transform(value: any): any {
    return value ? value : 'Отсутствует';
  }
}

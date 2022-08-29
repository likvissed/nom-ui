import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "showStr"
})
export class ArrayToStringTomesPipe implements PipeTransform {
  transform(tomes: any): any {
    if (tomes && tomes.length !== 0) {
      return `${tomes[0].date_start} - ${tomes[0].date_end}...`;
    }
  }
}

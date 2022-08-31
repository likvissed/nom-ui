import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "showStr"
})
export class ArrayToStringTomesPipe implements PipeTransform {
  transform(tomes: any, allData?: boolean): any {
    if (tomes && tomes.length !== 0) {
      if (!allData) {
        return `${tomes[0].date_start} - ${tomes[0].date_end}...`;
      } else {
        return tomes.map((el: any) => `Том №${el.index}: ${el.date_start}-${el.date_end}`).join(', ')
      }
    }
  }
}

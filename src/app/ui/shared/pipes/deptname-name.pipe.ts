import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arrDeptname"
})
export class DeptnameNamePipe implements PipeTransform {
  transform(deptnames: any): any {
    let arrNames = deptnames.map((name: any) => name.deptname).join(', ');

    return arrNames ? arrNames : 'Отсутствуют';
  }
}

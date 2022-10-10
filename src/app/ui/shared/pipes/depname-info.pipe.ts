import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arrFio"
})
export class DeptnameInfoPipe implements PipeTransform {
  transform(users: any): any {
    let arrStr = users.map((user: any) => user.fio).join(', ');

    return arrStr ? arrStr : 'Отсутствует';
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "describeStatusNum"
})
export class NameForStatusNomPipe implements PipeTransform {
  transform(id: number, statuses: any): any {
    let object = statuses.find((obj: any) => obj.id === id);

    return object.type;
  }
}

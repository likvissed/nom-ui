import { GetListFilterInterface } from './get-list-filters.interface';
import { GetListNomenclatureInterface } from './get-list-nomenclature.interface';

export interface GetListResponseInterface {
  nomenclatures: GetListNomenclatureInterface[],
  data_filters: GetListFilterInterface
}

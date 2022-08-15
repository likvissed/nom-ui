import { DurationTypeInterface } from './duration-type.interface';
import { OrderInterface } from "./order.interface";

export interface GetOrdersResponseInterface {
  orders: OrderInterface[],
  data_filters: {
    duration_types: DurationTypeInterface[]
  }
}

import { OrderInterface } from '../types/order.interface';

export const ORDER_STUB = {
  id: 1,
  article: "252",
  number: "Приказ №1",
  date_order: "01.01.2020",
  date: "2020-01-01T00:00:00.000Z",
  duration: "После истечения срока действия сертификата",
  desc: "desc1",
  link: "https://name-site/storage/app/media/documents/prikaz/121212.pdf",
  note: ""
};

export const ORDERS_STUB: OrderInterface[] = [ORDER_STUB];

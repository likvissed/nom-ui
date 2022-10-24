import { TomInterface } from './tom.interface';

export interface TableInterface {
  index: number
  is_dsp: boolean
  text: string
  duration: string
  article_number: string
  tips: string
  order_date: string
  order_number: string
  order_desc: string
  toms: TomInterface[]
}

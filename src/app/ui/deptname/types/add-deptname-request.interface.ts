interface User {
  tn: number
  fio: string
}

export interface AddDeptnameRequestInterface {
  id: number
  deptname: string
  info: string
  users: User[]
}

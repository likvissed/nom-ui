interface User {
  tn: number
  fio: string
}

export interface AddDeptnameRequestInterface {
  id: string
  deptname: string
  info: string
  users: User[]
}

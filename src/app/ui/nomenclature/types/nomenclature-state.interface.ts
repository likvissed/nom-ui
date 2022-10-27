export interface NomenclatureStateInterface {
  isSubmitting: boolean
  response: any
  errors: any,
  nomenclatures: any,
  filters: any,
  file: Blob | null,
  send_ssd: boolean
  fileUpload: boolean
}

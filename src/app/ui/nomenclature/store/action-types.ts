export enum ActionTypes {
  CREATE_TEMPLATE = '[Nomenclature] Create template',
  CREATE_TEMPLATE_SUCCESS = '[Nomenclature] Create template success',
  CREATE_TEMPLATE_FAILURE = '[Nomenclature] Create template failure',

  SEND_TO_SSD = '[Nomenclature] Send document to SSD',
  SEND_TO_SSD_SUCCESS = '[Nomenclature] Send to SSD success',
  SEND_TO_SSD_FAILURE = '[Nomenclature] Send to SSD failure',

  GET_LIST_NOMENCLATURE = '[Nomenclature] List',
  GET_LIST_NOMENCLATURE_SUCCESS = '[Nomenclature] List success',
  GET_LIST_NOMENCLATURE_FAILURE = '[Nomenclature] List failure',

  DOWNLOAD_NOMENCLATURE = '[Nomenclature] Download',
  DOWNLOAD_NOMENCLATURE_SUCCESS = '[Nomenclature] Download success',
  DOWNLOAD_NOMENCLATURE_FAILURE = '[Nomenclature] Download failure',

  DELETE_NOMENCLATURE = '[Nomenclature] Delete',
  DELETE_NOMENCLATURE_SUCCESS = '[Nomenclature] Delete success',
  DELETE_NOMENCLATURE_FAILURE = '[Nomenclature] Delete failure',

  CREATE_BASED_ON = '[Nomenclature] Create based on',
  CREATE_BASED_ON_SUCCESS = '[Nomenclature] Create based on success',
  CREATE_BASED_ON_FAILURE = '[Nomenclature] Create based on failure'
}

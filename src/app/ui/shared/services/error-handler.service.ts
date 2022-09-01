import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthHelper } from '@iss/ng-auth-center';

@Injectable()
export class ErrorHandlerService {
  str_severity = 'error';

  constructor(
    private authHelper: AuthHelper
  ) {}

  handleError(error: HttpErrorResponse) {
    console.error(error);

    switch (error.status) {
      case 422:
        alert(error.error.error_description);

        break;
      case 403:
        alert('Доступ запрещён');
        // this.authHelper.logout();

        break;
      case 404:
        alert('Данные не найдены');

        break;
      case 500:
        alert('Сервер временно недоступен');

        break;
      default:
        alert('Сервер временно недоступен');

        break;
    }

  }
}

import { LoaderService } from '../services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpEventType
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.loadingService.setLoading(true);

    this.totalRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}

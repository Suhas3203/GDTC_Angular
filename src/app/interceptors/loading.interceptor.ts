import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
    private loadingService: LoaderService,
    private snackBar: SnackBarComponent
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('caught');
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.setLoading(false);
        }
      }),
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            // console.log(' all looks good' + event);
            // http response status code

            // shows success snackbar with green background
            this.snackBar.openSnackBar(
              event.statusText,
              'Close',
              'green-snackbar'
            );
          }
        },
        (error: HttpErrorResponse) => {
          // http response status code

          // console.log('show error message' + error.error.errorMessage);

          // show error snackbar with red background
          this.snackBar.openSnackBar(
            error.error.errorMessage,
            'Close',
            'red-snackbar'
          );
        }
      )
    );
  }
}

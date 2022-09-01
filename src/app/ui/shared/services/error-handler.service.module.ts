import { ErrorHandlerService } from './error-handler.service';
import { EmployeeService } from './employee.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [ErrorHandlerService],
})
export class ErrorHandlerServiceModule {}

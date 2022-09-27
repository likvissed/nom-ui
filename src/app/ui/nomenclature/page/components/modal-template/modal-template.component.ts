import { sendToSsdAction } from './../../../store/actions/send-to-ssd.action';
import { isSubmittingSelector, flagSendSsd } from './../../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {
  templateFile!: Blob;
  request: any;
  pdfObj: any;
  isSubmitting$!: Observable<boolean>;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer,
    private store: Store
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.displayFile();
  }

  initializeValues() {
    this.templateFile = this.config.data?.document;
    this.request = this.config.data?.request;

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  displayFile() {
    let objUrl = URL.createObjectURL(this.templateFile);

    this.pdfObj = this.sanitizer.bypassSecurityTrustResourceUrl(objUrl);
  }

  onSendToSsd() {
    this.store.dispatch(sendToSsdAction({ data: this.request }));

    this.store.pipe(select(flagSendSsd))
      .subscribe((flag: any) => {
        if (flag) {
          this.ref.close();
        }
      });
  }

  onCloseModal() {
    this.ref.close();
  }
}

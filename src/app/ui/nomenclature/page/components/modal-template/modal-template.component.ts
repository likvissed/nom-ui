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

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.displayFile();
  }

  initializeValues() {
    this.templateFile = this.config.data?.document;
    this.request = this.config.data?.request;
  }

  displayFile() {
    let objUrl = URL.createObjectURL(this.templateFile);
    this.pdfObj = this.sanitizer.bypassSecurityTrustResourceUrl(objUrl);
  }

  onSendToSsd() {
  }

  onCloseModal() {
    this.ref.close();
  }
}

import { flagUploadFile } from '@store/nomenclature/nomenclature-selectors';

import { uploadFileAction } from '@store/nomenclature/actions/upload-file.action';

import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-upload-scan',
  templateUrl: './upload-scan.component.html',
  styleUrls: ['./upload-scan.component.scss']
})
export class UploadScanComponent implements OnInit {
  formData = new FormData();

  maxSize: number = 20000000;

  constructor(
    private store: Store,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
  ) { }

  ngOnInit() {
    this.formData.append('id', this.config.data?.id);
  }

  onSaveFile(event: any) {
    const file: File = event.files[0];
    
    this.formData.append(
      'file',
      file,
      file.name
    );

    this.store.dispatch(uploadFileAction({ data: this.formData }));

    this.store.pipe(select(flagUploadFile))
      .subscribe((flag: boolean) => {
        if (flag) {
          this.onCloseModal();
        } else {
          this.formData.delete('file');
        }
      });
  }

  onCloseModal() {
    this.ref.close();
  }

}

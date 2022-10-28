import { flagUploadFile } from './../../../store/nomenclature-selectors';

import { uploadFileAction } from './../../../store/actions/upload-file.action';

import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-upload-scan',
  templateUrl: './upload-scan.component.html',
  styleUrls: ['./upload-scan.component.scss']
})
export class UploadScanComponent implements OnInit {
  form!: FormGroup;
  formData = new FormData();
  defaultFileName = 'Файл не выбран';

  constructor(
    private store: Store,
    public config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.form = this.formBuilder.group({
      id: new FormControl(this.config.data?.id, [Validators.required, Validators.maxLength(15), Validators.pattern("^[0-9]*$")]),

      file: new FormControl(null, [Validators.required]),
      fileName: new FormControl(this.defaultFileName)
    })
  }

  // Перевести размер загруженного файла из байт в Мб и проверить
  onConvertSize(value: any) {
    let sizeFile = value / 1024 / 1024;

    if (sizeFile > 20) {
      this.messageService.add({severity: 'warn', summary: 'Внимание', detail: 'Невозможно загрузить файл, размером больше 20 мегабайт' });
      
      return false;
    } else {
      return true;
    }
  }

  uploadFile(event: any) {
    this.formData.delete('file');

    const file: File = event.target.files[0];

    if (!file) {
      this.messageService.add({severity: 'warn', summary: 'Внимание', detail: 'Загрузка файла не удалась. Попробуйте снова' });
    }

    if (file && this.onConvertSize(file.size)) {
      this.form.controls['fileName'].setValue(file.name);
      
      this.formData.append(
        'file',
        file,
        file.name
      );
    } 
  }

  onSaveFile() {
    this.formData.append('id', this.form.value.id);

    this.store.dispatch(uploadFileAction({ data: this.formData }));

    this.store.pipe(select(flagUploadFile))
      .subscribe((flag: boolean) => {
        if (flag) {
          this.onCloseModal();
        }
      });
  }

  onCloseModal() {
    this.ref.close();
  }

}

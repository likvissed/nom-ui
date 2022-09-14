import { DurationTypeInterface } from './../../../types/duration-type.interface';
import { addOrderAction } from './../../../store/actions/add-order.action';
import { ModalSelectArticleComponent } from '../../../../article/page/components/modal-select-article/modal-select-article.component';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
  providers: [DialogService]
})
export class NewOrderComponent implements OnInit {
  form!: FormGroup;
  durationTypes: DurationTypeInterface[] = [];

  constructor(
    public ref: DynamicDialogRef,
    private formBuilder: FormBuilder,
    private store: Store,
    public config: DynamicDialogConfig,
    public dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.oninitializeValues();
    this.onInitializeFrom();
  }

  oninitializeValues() {
    this.onLoadDurationTypes();
  }

  onLoadDurationTypes() {
    this.durationTypes = this.config.data?.durationTypes;
  }

  onInitializeFrom() {
    this.form = this.formBuilder.group({
      article: new FormControl({value: '', disabled: true}, [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      date_order: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      duration_type: new FormControl(this.durationTypes[0]['id'], [Validators.required]),
      link: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      note: new FormControl('', [Validators.maxLength(500)])
    })
  }

  onOpenModalListArticles() {
    const ref = this.dialogService.open(ModalSelectArticleComponent, {
      header: 'Выберите статью',
      width: '70%',
      data: {
        isShowSelected: true
      }
    });

    ref.onClose.subscribe((result: any) => {
      if (result) {
        this.form.controls['article'].setValue(`${result.article_id+result.sub}`);
      }
    });
  }

  onSaveOrder() {
    this.store.dispatch(addOrderAction({ data: this.form.getRawValue() }));

    this.onCloseModal();
  }

  onCloseModal() {
    this.ref.close();
  }

}

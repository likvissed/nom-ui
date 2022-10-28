import { AuthHelper } from '@iss/ng-auth-center';

import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { selectFileTemplate, isSubmittingSelector } from '../../../store/nomenclature-selectors';
import { searchUsers } from './../../../../shared/store/selectors';

import { ModalTemplateComponent } from './../modal-template/modal-template.component';
import { ModalEditTomeComponent } from './../modal-edit-tome/modal-edit-tome.component';
import { ModalSelectArticleComponent } from './../../../../article/page/components/modal-select-article/modal-select-article.component';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { createTemplateAction } from './../../../store/actions/create-template.action';
import { findEmployeeAction } from 'src/app/ui/shared/store/actions/find-employee.action';
import { getOrdersAction } from 'src/app/ui/order/store/actions/get-orders.action';

import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DraftService } from '../../../services/draft.service';

import { TableInterface } from '../../../types/table.interface';
import { SignsInfoInterface } from '../../../types/signs-info.interface';

@Component({
  selector: 'app-new-nomenclature',
  templateUrl: './new-nomenclature.component.html',
  styleUrls: ['./new-nomenclature.component.scss'],
  providers: [DialogService]
})
export class NewNomenclatureComponent implements OnInit {
  form!: FormGroup;
  years: any = [
    {
      name: new Date().getFullYear()
    },
    {
      name: new Date().getFullYear() + 1
    }
  ];
  employees$!: Observable<any>;
  leftIndex: any;
  isSubmitting$!: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    public dialogService: DialogService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private authHelper: AuthHelper,
    private draftService: DraftService
  ) { }

  ngOnInit() {
    this.onInitializeValues();
    this.onInitializeFrom();
    this.onSetValuesForm();
  }

  onInitializeValues() {
    this.store.dispatch(getOrdersAction());

    this.leftIndex = this.authHelper.getJwtPayload()['left_index'];

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onInitializeFrom() {
    this.form = this.formBuilder.group({
      deptname:  new FormControl(this.leftIndex[0], [Validators.required]),
      head_dept: new FormControl('', [Validators.required, Validators.maxLength(600)]),
      year: new FormControl(this.years[0].name, [Validators.required]),
      sign_main: new FormControl('', [Validators.required]),

      table: this.formBuilder.array([], [Validators.required]),

      signs_info: this.formBuilder.array([], [Validators.required])
    })
  }

  onSetValuesForm() {
    this.route.data.subscribe((data: any) => {
      if (data.presentNom) {
        this.onPatchForm(data.presentNom);
      }
    });
  }

  onPatchForm(data: any) {
    this.form.patchValue(data);

    data.table.forEach((object: any) => {
      this.allRecords.push(this.createTableRowBasedOn(object));
    });

    data.signs_info.forEach((object: any, index: number) => {
      this.allSigns.push(this.createSignRowBasedOn(object));

      this.selectEmpSign(object, index);
    });
  }

  searchEmployee(event: any) {
    this.store.dispatch(findEmployeeAction({ data: event.query.trim()}));
    this.employees$ = this.store.pipe(select(searchUsers));
  }

  selectEmpSign(event: any, index: number) {
    (((<FormArray>this.form.controls['signs_info']).at(index)) as FormGroup).controls['tn'].setValue(event.tn);
    (((<FormArray>this.form.controls['signs_info']).at(index)) as FormGroup).controls['fio'].setValue(event.fio);
    (((<FormArray>this.form.controls['signs_info']).at(index)) as FormGroup).controls['prof'].setValue(event.prof);
  }

  get allRecords(): FormArray {
    return this.form.get("table") as FormArray;
  }

  private createTableRow(): FormGroup {
    return this.formBuilder.group({
      index: '',
      is_dsp: false,
      text: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      article_number: new FormControl('', [Validators.required]),
      tips: new FormControl('', [Validators.maxLength(500)]),
      toms: this.formBuilder.array([], [Validators.required]),
      order_date: '',
      order_number: '',
      order_desc: ''
    })
  }

  private createTableRowBasedOn(data: any): FormGroup {
    return this.formBuilder.group({
      index: '',
      is_dsp: data.is_dsp,
      text: new FormControl(data.text, [Validators.required]),
      duration: new FormControl(data.duration, [Validators.required]),
      article_number: new FormControl(data.article_number, [Validators.required]),
      tips: new FormControl(data.tips, [Validators.maxLength(500)]),
      toms: this.formBuilder.array([data.toms], [Validators.required]),
      order_date: data.order.date_order,
      order_number: data.order.number,
      order_desc: data.order.desc
    })
  }

  private createTableRowDraft(object: any): FormGroup {
    return this.formBuilder.group({
      index: object.index,
      is_dsp: object.is_dsp,
      text: new FormControl(object.text, [Validators.required]),
      duration: new FormControl(object.duration, [Validators.required]),
      article_number: new FormControl(object.article_number, [Validators.required]),
      tips: new FormControl(object.tips, [Validators.maxLength(500)]),
      toms: this.formBuilder.array(object.toms, [Validators.required]),
      order_date: object.order_date,
      order_number: object.order_number,
      order_desc: object.order_desc
    })
  }

  onNewRecord() {
    this.allRecords.push(this.createTableRow());
  }

  onDeleteRecord(recordIndex: number) {
    this.allRecords.removeAt(recordIndex);
  }

  onOpenModalSelectArticle(recordIndex: number) {
    const ref = this.dialogService.open(ModalSelectArticleComponent, {
      header: 'Выберите статью',
      width: '70%',
      data: {
        isShowSelected: true
      }
    });

    ref.onClose.subscribe((result: any) => {
      if (result) {
        (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['text'].setValue(result.text);
        (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['duration'].setValue(result.duration);
        (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['article_number'].setValue(result.article_id+result.sub);

        if (result.order_number) {
          (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['order_number'].setValue(result.order_number);
          (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['order_date'].setValue(result.order_date);
          (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['order_desc'].setValue(result.order_desc);
        }

        // Для запуска обнаружения изменений
        this.cdr.detectChanges();
      }
    });
  }

  private createTomsRow(values: any): FormGroup {
    return this.formBuilder.group({
      index: new FormControl(values.index, [Validators.required]),
      date_start: new FormControl(values.date_start, [Validators.required]),
      date_end: new FormControl(values.date_end, [Validators.required]),
    })
  }

  getTomes(index: number): FormArray {
    return this.allRecords.at(index).get("toms") as FormArray;
  }

  onAddTom(recordIndex: number, values: any) {
    this.getTomes(recordIndex).push(this.createTomsRow(values));
  }

  onDeleteTom(recordIndex: number) {
    this.getTomes(recordIndex).clear();
  }

  onOpenModalCreateTome(recordIndex: number) {
    let currentTome = (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['toms'].value;

    const ref = this.dialogService.open(ModalEditTomeComponent, {
      header: 'Выбор дат заведения и закрытия',
      width: '50%',
      data: {
        tome: currentTome
      }
    });

    ref.onClose.subscribe((result: any) => {
      if (result) {
        this.onDeleteTom(recordIndex);

        result.toms.forEach((element: any) => {
          this.onAddTom(recordIndex, element);

          this.cdr.detectChanges();
        });
      }
    });
  }

  get allSigns(): FormArray {
    return this.form.get("signs_info") as FormArray;
  }

  private createSignRow(): FormGroup {
    return this.formBuilder.group({
      tn: new FormControl('', [Validators.required]),
      fio: new FormControl('', [Validators.required]),
      prof: new FormControl('', [Validators.required]),
      obj: new FormControl('')
    })
  }

  private createSignRowBasedOn(data: any): FormGroup {
    return this.formBuilder.group({
      tn: new FormControl(data.tn, [Validators.required]),
      fio: new FormControl(data.fio, [Validators.required]),
      prof: new FormControl(data.prof, [Validators.required]),
      obj: new FormControl(data)
    })
  }

  onNewSign() {
    this.allSigns.push(this.createSignRow());
  }

  onDeleteSign(recordIndex: number) {
    this.allSigns.removeAt(recordIndex);
  }

  onRecalculationIndex() {
    const control = <FormArray>this.form.controls['table'];

    control.value.map((x: any, index: any)=>{
      (((<FormArray>this.form.controls['table']).at(index)) as FormGroup).controls['index'].setValue(index + 1);
    });
  }

  onSaveDraft() {
    this.draftService.onSet(this.form.getRawValue());

    this.messageService.add({severity: 'success', summary: 'Успешно', detail: 'Черновик сохранен' });
  }

  onGetDraft() {
    let dataObject = this.draftService.onGet();

    if (dataObject) {
      this.form.patchValue(dataObject);

      dataObject.table.forEach((object: TableInterface) => {
        this.allRecords.push(this.createTableRowDraft(object));
      });
  
      dataObject.signs_info.forEach((object: SignsInfoInterface) => {
        this.allSigns.push(this.createSignRowBasedOn(object));
      });
    } else {
      this.messageService.add({severity: 'warn', summary: 'Внимание', detail: 'Сохраненных черновиков нет' });
    }
  }

  onShowTemplate() {
    this.onRecalculationIndex();

    if (this.form.invalid) {
      this.messageService.add({severity: 'warn', summary: 'Внимание', detail: 'Заполнены не все поля для документа' });

      return
    }

    this.store.dispatch(createTemplateAction({ data: this.form.getRawValue() }));

    let isOpenModal = false;

    const subscription = this.store.pipe(select(selectFileTemplate))
      .subscribe((templateFile: Blob) => {
        if (templateFile) {
          isOpenModal = true;

          const ref = this.dialogService.open(ModalTemplateComponent, {
            header: 'Документ сформирован',
            width: '80%',
            data: {
              document: templateFile,
              request: this.form.getRawValue()
            }
          });

          ref.onClose.subscribe(() => {
            subscription.unsubscribe();
          });
        }
      });

    if (isOpenModal){
      subscription.unsubscribe();
    }

  }
}

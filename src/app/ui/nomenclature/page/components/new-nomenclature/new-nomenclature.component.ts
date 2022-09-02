import { async } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { selectFileTemplate, isSubmittingSelector } from './../../../store/selectors';
import { ModalTemplateComponent } from './../modal-template/modal-template.component';
import { createTemplateAction } from './../../../store/actions/create-template.action';
import { selectAllDurationTypes } from './../../../../order/store/selectors';
import { ModalEditTomeComponent } from './../modal-edit-tome/modal-edit-tome.component';
import { ModalSelectArticleComponent } from './../../../../article/page/components/modal-select-article/modal-select-article.component';
import { DialogService } from 'primeng/dynamicdialog';
import { map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { searchUsers } from './../../../../shared/store/selectors';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { findEmployeeAction } from 'src/app/ui/shared/store/actions/find-employee.action';
import { getOrdersAction } from 'src/app/ui/order/store/actions/get-orders.action';
import { ActivatedRoute } from '@angular/router';

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
  users: any = [];
  employees$!: Observable<any>;
  leftIndex: any;
  durationTypes = [];
  isSubmitting$!: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    public dialogService: DialogService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.onInitializeValues();
    this.onInitializeFrom();
    this.onSetValuesForm();
  }

  onInitializeValues() {
    this.store.dispatch(getOrdersAction());
    this.onLoadDurationTypes();
    // TODO: Заменить после авторизации
    this.leftIndex = 'УИВТ';

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onLoadDurationTypes() {
    // TODO: Перенести в отдельный запрос в компонент ModalEditTomeComponent
    this.store.pipe(select(selectAllDurationTypes))
      .subscribe((durationValues: any) => {
        if (durationValues) {
          this.durationTypes = durationValues;
        }
      });
  }

  onInitializeFrom() {
    this.form = this.formBuilder.group({
      head_dept: new FormControl('', [Validators.required, Validators.maxLength(600)]),
      year: new FormControl(this.years[0].name, [Validators.required]),
      sign_main: new FormControl('', [Validators.required]),

      table: this.formBuilder.array([], [Validators.required]),

      signs_tns: this.formBuilder.array([], [Validators.required]),

      // TODO: Убрать параметр `left_index`
      left_index: this.leftIndex
    })
  }

  onSetValuesForm() {
    this.route.data.subscribe((data: any) => {
      // TODO: Выполняются 2 запроса (второй - список номенклатур)
      if (data.presentNom) {
        this.form.controls['head_dept'].setValue(data.presentNom.info.head_dept);
        this.form.controls['sign_main'].setValue(data.presentNom.info.sign_main);

        data.presentNom.table.forEach((object: any) => {
          this.allRecords.push(this.createTableRowBasedOn(object));
        });

        data.presentNom.info.signs_info.forEach((object: any) => {
          this.allSigns.push(this.createSignRowBasedOn(object));
        });
      }
    });
  }

  searchEmployee(event: any) {
    this.store.dispatch(findEmployeeAction({ data: event.query.trim()}));
    this.employees$ = this.store.pipe(select(searchUsers));
  }

  selectEmpSign(event: any, index: number) {
    (((<FormArray>this.form.controls['signs_tns']).at(index)) as FormGroup).controls['tn'].setValue(event.tn);
    (((<FormArray>this.form.controls['signs_tns']).at(index)) as FormGroup).controls['fio'].setValue(event.fio);
    (((<FormArray>this.form.controls['signs_tns']).at(index)) as FormGroup).controls['title'].setValue(event.prof);
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
      toms: this.formBuilder.array([], [Validators.required])
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
      toms: this.formBuilder.array([data.toms], [Validators.required])
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

        let articleValue = result.order_name ? result.order_name : result.article_id+result.sub;
        (((<FormArray>this.form.controls['table']).at(recordIndex)) as FormGroup).controls['article_number'].setValue(articleValue);

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
        tome: currentTome,
        durationTypes: this.durationTypes
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
    return this.form.get("signs_tns") as FormArray;
  }

  // TODO: Добавить поле `tn` в апи
  private createSignRow(): FormGroup {
    return this.formBuilder.group({
      tn: new FormControl('', [Validators.required]),
      fio: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required])
    })
  }

  private createSignRowBasedOn(data: any): FormGroup {
    return this.formBuilder.group({
      // tn: new FormControl(data.tn, [Validators.required]), // TODO: signs_info поменять на signs_tns !!!!
      fio: new FormControl(data.fio, [Validators.required]),
      title: new FormControl(data.title, [Validators.required])
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

  onShowTemplate() {
    this.onRecalculationIndex();

    if (this.form.invalid) {
      this.messageService.add({severity: 'warn', summary: 'Внимание', detail: 'Заполнены не все поля для документа' });

      return
    }

    let request = {
      info: {
        left_index: this.form.value.left_index,
        head_dept: this.form.value.head_dept,
        year: this.form.value.year,
        sign_main: {
          fio: this.form.value.sign_main.fio,
          title: this.form.value.sign_main.prof
        },
        signs_tns: this.form.value.signs_tns,
      },
      table: this.form.value.table
    }

    this.store.pipe(select(selectFileTemplate))
      .subscribe((templateFile: Blob) => {
        if (templateFile) {

          this.dialogService.open(ModalTemplateComponent, {
            header: 'Документ сформирован',
            width: '80%',
            data: {
              document: templateFile,
              request: request
            }
          });
        } else {
          this.store.dispatch(createTemplateAction({ data: request }));
        }
      });

  }

}

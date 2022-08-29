import { DurationTypeInterface } from './../../../../order/types/duration-type.interface';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-edit-tome',
  templateUrl: './modal-edit-tome.component.html',
  styleUrls: ['./modal-edit-tome.component.scss']
})
export class ModalEditTomeComponent implements OnInit {
  form!: FormGroup;
  selectedDate = {
    id: -1,
    duration: 'Выбрать дату',
  }
  durationTypes: any = [
    this.selectedDate
  ];
  selectDateEnd: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeValues();
    this.onInitializeFrom();
  }

  initializeValues() {
    this.durationTypes.push(this.config.data?.durationTypes);
    this.durationTypes = this.durationTypes.flat();
  }

  onInitializeFrom() {
    this.form = this.formBuilder.group({
      toms: this.formBuilder.array([], [Validators.required])
    })

    this.onFillTomes();
  }

  onFillTomes() {
    let tomes = this.config.data?.tome;

    if (tomes) {
      tomes.forEach((element: any) => {
        this.tableRowArray.push(this.addTomsRow(element));
      });
    }
  }

  private addTomsRow(data: any): FormGroup {
    return this.formBuilder.group({
      index: data.index,
      date_start: new FormControl(data.date_start, [Validators.required]),
      date_end: new FormControl(data.date_end, [Validators.required]),
      date_end_string: new FormControl(this.onFindDuration(data.date_end))
    })
  }

  onFindDuration(str: any) {
    let value = this.durationTypes.find((el: any) => {
      return str == el.duration;
    })

    return value ? value : this.selectedDate
  }

  get tableRowArray(): FormArray {
    return this.form.get("toms") as FormArray;
  }

  onGetLastIndex() {
    return this.tableRowArray.length + 1;
  }

  private createTomsRow(): FormGroup {
    return this.formBuilder.group({
      index: this.onGetLastIndex(),
      date_start: new FormControl('', [Validators.required]),
      date_end: new FormControl('', [Validators.required]),
      date_end_string: new FormControl('')
    })
  }

  onAddRow() {
    this.tableRowArray.push(this.createTomsRow());
  }

  onDeleteRow(recordIndex: number) {
    this.tableRowArray.removeAt(recordIndex);
  }

  onClearSelectDateEnd(index: number) {
    let fullEndDateStr = (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_end_string'];

    if (fullEndDateStr.value.id != -1){
      (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_end'].setValue(fullEndDateStr.value.duration);
    } else {
      (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_end'].setValue('');
    }
  }

  onChangeDate(date: any) {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    return (day[1]?day:"0"+day[0]) + '.' + (month[1]?month:"0"+month[0]) + '.' + year;
  }

  onSelectDateStart(index: number) {
    let fullStartDate = (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_start'];

    (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_start'].setValue(this.onChangeDate(fullStartDate.value));
  }

  onSelectDateEnd(index: number) {
    let fullEndDate = (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_end'];

    (((<FormArray>this.form.controls['toms']).at(index)) as FormGroup).controls['date_end'].setValue(this.onChangeDate(fullEndDate.value));
  }

  onSaveTome() {
    // console.log('getRawValue', this.form.getRawValue());
    if (this.form.valid) {
      this.ref.close(this.form.getRawValue());
    } else {
      this.onCloseModal();
    }
  }

  onCloseModal() {
    this.ref.close();
  }
}

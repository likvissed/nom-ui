import { updateDeptnameAction } from './../../../store/actions/update-deptname.action';
import { searchUsers } from './../../../../shared/store/selectors';
import { findEmployeeAction } from './../../../../shared/store/actions/find-employee.action';
import { Observable } from 'rxjs';
import { flagResponse } from './../../../store/selectors';
import { addDeptnameAction } from './../../../store/actions/add-deptname.action';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-deptname',
  templateUrl: './new-deptname.component.html',
  styleUrls: ['./new-deptname.component.scss']
})
export class NewDeptnameComponent implements OnInit {
  form!: FormGroup;
  data: any;
  employees$!: Observable<any>;

  constructor(
    public config: DynamicDialogConfig,
    private formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    private store: Store
  ) { }

  ngOnInit() {
    this.onInitializeValues();
    this.onInitializeFrom();
  }

  onInitializeValues() {
    this.onLoadData();
  }

  onLoadData() {
    this.data = this.config.data?.data;
  }

  onInitializeFrom() {
    if (!this.data) {

      this.form = this.formBuilder.group({
        id: new FormControl(''),
        deptname: new FormControl('', [Validators.maxLength(15), Validators.required]),
        info: new FormControl('', [Validators.maxLength(30)]),
        users: this.formBuilder.array([])
      })
    } else {

      this.form = this.formBuilder.group({
        id: new FormControl('', [Validators.required]),
        deptname: new FormControl({ value: this.data.tn, disabled: true }, [Validators.maxLength(15), Validators.required]),
        info: new FormControl('', [Validators.maxLength(30)]),
        users: this.formBuilder.array([])
      })

      this.form.patchValue(this.data);

      this.data.users.forEach((object: any) => {
        this.allUsers.push(this.createUserRow(object));
      });
    }
  }

  searchEmployee(event: any) {
    this.store.dispatch(findEmployeeAction({ data: event.query.trim()}));
    this.employees$ = this.store.pipe(select(searchUsers));
  }

  selectEmpUser(event: any, index: number) {
    (((<FormArray>this.form.controls['users']).at(index)) as FormGroup).controls['tn'].setValue(event.tn);
    (((<FormArray>this.form.controls['users']).at(index)) as FormGroup).controls['fio'].setValue(event.fio);
  }

  get allUsers(): FormArray {
    return this.form.get("users") as FormArray;
  }

  private createUserRow(data?: any): FormGroup {
    if (!data) {

      return this.formBuilder.group({
        tn: new FormControl('', [Validators.required]),
        fio: new FormControl('', [Validators.required]),
        obj: new FormControl('')
      })
    } else {
      return this.formBuilder.group({
        tn: new FormControl(data.tn, [Validators.required]),
        fio: new FormControl(data.fio, [Validators.required]),
        obj: new FormControl(data)
      })
    }
  }

  onNewUser() {
    this.allUsers.push(this.createUserRow());
  }

  onDeleteUser(index: number) {
    this.allUsers.removeAt(index);
  }

  onSave() {
    if (!this.data) {
      this.store.dispatch(addDeptnameAction({ data: this.form.getRawValue() }));

      this.store.pipe(select(flagResponse))
        .subscribe((flag: any) => {
          if (flag) {
            this.onCloseModal();
          }
        });
    } else {
      this.store.dispatch(updateDeptnameAction({ data: this.form.getRawValue() }));

      this.store.pipe(select(flagResponse))
        .subscribe((flag: any) => {
          if (flag) {
            this.onCloseModal();
          }
        });
    }
  }

  onCloseModal() {
    this.ref.close();
  }
}

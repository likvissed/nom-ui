import { updateUserAction } from './../../../store/actions/update-user.action';
import { addUserAction } from './../../../store/actions/add-user.action';

import { flagResponse } from '../../../store/user-selectors';

import { Store, select } from '@ngrx/store';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { RoleInterface } from './../../../types/role.interface';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  form!: FormGroup;
  roles: RoleInterface[] = [];
  data: any;

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
    this.onLoadRoles();
  }

  onLoadRoles() {
    let roleAdmin = this.config.data?.roles.find((el: any) => el.role == 'admin' );

    this.roles = [roleAdmin];
    this.data = this.config.data?.data;
  }

  onInitializeFrom() {

    if (!this.data) {
      this.form = this.formBuilder.group({
        tn: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern("^[0-9]*$")]),
        role_id: new FormControl(this.roles[0]['id'], [Validators.required])
      })
    } else {


      this.form = this.formBuilder.group({
        tn: new FormControl({ value: this.data.tn, disabled: true }),
        role_id: new FormControl(this.roles[0]['id'], [Validators.required])
      })
    }
  }

  onSaveUser() {
    if (!this.data) {
      this.store.dispatch(addUserAction({ data: this.form.getRawValue() }));

      this.store.pipe(select(flagResponse))
        .subscribe((flag: any) => {
          if (flag) {
            this.onCloseModal();
          }
        });
    } else {
      this.store.dispatch(updateUserAction({ data: this.form.getRawValue() }));

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

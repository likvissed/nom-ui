import { flagResponse } from './../../../store/selectors';
import { addUserAction } from './../../../store/actions/add-user.action';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoleInterface } from './../../../types/role.interface';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  form!: FormGroup;
  roles: RoleInterface[] = [];

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
    this.roles = this.config.data?.roles;
  }

  onInitializeFrom() {
    this.form = this.formBuilder.group({
      tn: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern("^[0-9]*$")]),
      role_id: new FormControl(this.roles[0]['id'], [Validators.required]),
      deptname: new FormControl('', Validators.maxLength(30))
    })
  }

  onSaveUser() {
    this.store.dispatch(addUserAction({ data: this.form.getRawValue() }));

    this.store.pipe(select(flagResponse))
      .subscribe((flag: any) => {
        if (flag) {
          this.onCloseModal();
        }
      });
  }

  onCloseModal() {
    this.ref.close();
  }

}

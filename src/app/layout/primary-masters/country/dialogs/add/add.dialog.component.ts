import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Issue, Country} from '../../models/issue';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add.dialog',  
  templateUrl: './add.dialog.html',
  styleUrls: ['./add.dialog.scss']
})

export class AddDialogComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl(false)
   });
    constructor(private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) { }
  
    get name(){
      return this.form.get('name')
    }
    ngOnInit() {
      // this.form = this.formBuilder.group({
      //   mySwitch: [true]
      // }, );
    }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

    onCancel() {
      this.router.navigate(['/primary-masters/country'], { relativeTo: this.route });
    }

}

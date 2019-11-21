import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Issue, Country} from '../../models/issue';

@Component({
  selector: 'app-add.dialog',  
  templateUrl: './add.dialog.html',
  styleUrls: ['./add.dialog.scss']
})

export class AddDialogComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
   });
    constructor() { }
  
    get name(){
      return this.form.get('name')
    }
    ngOnInit() {
    }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}

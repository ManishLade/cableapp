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
      public dataService: DataService,
      private router: Router) { }
  
    get name(){
      return this.form.get('name')
    }
    ngOnInit() {
     
    }
  
    onSubmit(){
      var country = new Country();
      country.Name = this.form.get('name').value;
      country.Id= 0;
      country.Status= 1;
      var self = this;
      this.dataService.addCountry(country).subscribe(
        data => {
            console.log(data);
            self.router.navigate(['/primary-masters/country'], { relativeTo: this.route });
        },
        error => {
            // self.error = error;
            // self.loading = false;
        }
    );;
    }

    onCancel() {
      this.router.navigate(['/primary-masters/country'], { relativeTo: this.route });
    }

}

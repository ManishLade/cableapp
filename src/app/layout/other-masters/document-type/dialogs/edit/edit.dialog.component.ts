import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from '../../models/documenttype';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-baza.dialog',
    templateUrl: './edit.dialog.html',
    styleUrls: ['./edit.dialog.scss']
})
export class EditDocumentTypeComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });

    documentType: DocumentType;

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public dataService: DataService, private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        this.documentType = navigation.extras.state as DocumentType;
    }

    get name() {
        return this.form.get('name');
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    ngOnInit() {
        this.f.name.setValue(this.documentType.Name);
        this.f.status.setValue(this.documentType.Status === 1 ? true : false);
    }

    onEdit() {
        this.documentType.Name = this.f.name.value;
        const self = this;
        this.dataService.updateDocumentType(this.documentType).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/document-type'], {
                    relativeTo: this.route
                });
            },
            error => {
                // self.error = error;
                // self.loading = false;
            }
        );
    }

    onCancel() {
        this.router.navigate(['/document-type'], {
            relativeTo: this.route
        });
    }
}

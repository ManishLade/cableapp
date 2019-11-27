import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from '../../models/documentType';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add.dialog.html',
    styleUrls: ['./add.dialog.scss']
})
export class AddDocumentTypeComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        status: new FormControl(true)
    });
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
    ) {}

    get name() {
        return this.form.get('name');
    }
    ngOnInit() {}

    onSubmit() {
        const documentType = new DocumentType();
        documentType.Name = this.form.get('name').value;
        documentType.Id = 0;
        documentType.Status = this.form.get('status').value ? 1 : 0;
        const self = this;
        this.dataService.addDocumentType(documentType).subscribe(
            data => {
                console.log(data);
                self.router.navigate(['/document-type'], {
                    relativeTo: this.route
                });
            },
            error => {
            }
        );
    }

    onCancel() {
        this.router.navigate(['/document-type'], {
            relativeTo: this.route
        });
    }
}

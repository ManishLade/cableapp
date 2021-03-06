import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CityDataService } from '../../services/data.service';

@Component({
    selector: 'app-delete.dialog',
    templateUrl: './delete.dialog.html',
    styleUrls: ['./delete.dialog.scss']
})
export class DeleteDialogComponent {
    message = 'Are you sure?';
    confirmButtonText = 'Yes';
    cancelButtonText = 'Cancel';
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        public dataService: CityDataService,
        private dialogRef: MatDialogRef<DeleteDialogComponent>
    ) {
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText =
                    data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText =
                    data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }

    onConfirmClick(): void {
        this.dialogRef.close(true);
    }
}

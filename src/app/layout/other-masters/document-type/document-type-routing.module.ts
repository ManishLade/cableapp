import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentTypeComponent } from './document-type.component';
import { AddDocumentTypeComponent } from './dialogs/add/add.dialog.component';
import { EditDocumentTypeComponent } from './dialogs/edit/edit.dialog.component';

const routes: Routes = [
    {
        path: '',
        component: DocumentTypeComponent
    },
    {
        path: 'add',
        component: AddDocumentTypeComponent
    },
    {
        path: 'edit',
        component: EditDocumentTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentTypeRoutingModule {}

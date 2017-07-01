import {Component}          from '@angular/core';
import {MdDialog}           from '@angular/material';
import {DialogInstruction}  from './dialog-instruction.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'עמדת בחירת שירים - מחול ישראלי אלעד פרל';

    constructor(public dialog: MdDialog) {
    }

    openDialog() {
        this.dialog.open(DialogInstruction);
    }
}
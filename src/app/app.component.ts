import {Component}          from '@angular/core';
import {MdDialog}           from '@angular/material';
import {DialogInstruction}  from './dialog-instruction.component';
import {Dance} from './dance';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'עמדת בחירת שירים - מחול ישראלי אלעד פרל';
    danceResults: Dance[] = [];
    choices: Dance[] = [];

    constructor(public dialog: MdDialog) {
    }

    openDialog() {
        this.dialog.open(DialogInstruction);
    }
}

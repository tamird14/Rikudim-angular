import {Component}          from '@angular/core';

@Component({
    selector: 'dialog-instruction',
    template: `
        <div>
            <h1>הוראות</h1>
            <h3>1. הקלד את שם השיר (או חלק ממנו) ולחץ חפש</h3>
            <h3>2. בחר את השירים הרצויים ע"י לחיצה עליהם</h3>
            (ניתן לבחור יותר משיר אחד)
            <h3>3. הכנס שם ולחץ שלח</h3>
        </div>
    `,
    styleUrls: ['./dialog-instruction.component.css']
})
export class DialogInstruction {
}

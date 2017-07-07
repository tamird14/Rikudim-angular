import {NgModule}                       from '@angular/core';
import {BrowserModule}                  from '@angular/platform-browser';
import {FormsModule}                    from '@angular/forms';
import {HttpModule}                     from '@angular/http';
import {BrowserAnimationsModule}        from '@angular/platform-browser/animations';

import {
    MdIconModule, MdDialogModule, MdButtonModule,
    MdGridListModule, MdInputModule, MdRadioModule, MdSelectModule
}         from '@angular/material';

import {AppRoutingModule}               from './app-routing.module';

import {AppComponent}           from './app.component';
import {DialogInstruction}      from './dialog-instruction.component';
import {SearchColComponent}     from './search_col.component';
import {SearchFormComponent}    from './search_form.component';

import {DashboardComponent}     from './dashboard.component';
import {HeroesComponent}        from './heroes.component';
import {HeroDetailComponent}    from './hero-detail.component';
import {DanceService}           from './dance.service';
import {HeroSearchComponent}    from './hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdIconModule,
        MdDialogModule,
        MdButtonModule,
        MdGridListModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule
    ],
    declarations: [
        AppComponent,
        SearchColComponent,
        SearchFormComponent,
        DialogInstruction,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [DanceService],
    bootstrap: [AppComponent],
    entryComponents: [DialogInstruction]
})
export class AppModule {
}

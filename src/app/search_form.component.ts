import {Component, ViewChild}          from '@angular/core';
import {DanceService}   from './dance.service';
import {Dance}          from './dance';
import {Observable} from 'rxjs/Rx';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MdPaginator} from '@angular/material';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
    selector: 'search-form',
    templateUrl: './search_form.component.html',
    styleUrls: ['./search_form.component.css']
})
export class SearchFormComponent {
    years: number[] = [];
    results: Dance[] = [];
    exampleDatabase = new ExampleDatabase(this.results);
    dataSource: ExampleDataSource | null;

    @ViewChild(MdPaginator) paginator: MdPaginator;

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }

    constructor(private danceService: DanceService) {
        for (let i = 1924; i <= new Date().getFullYear(); i += 1) {
            this.years.push(i);
        }
    }

    searchSongs(name: string, creator: string, type: string, year: string) {
        this.danceService
            .getDances(name, creator, type, year)
            .then(dances => this.foo2(dances));
    }

    foo2(da: Array<Dance>): void {
        da.forEach(dance =>
            this.results.push(new Dance(dance.creator, dance.id, dance.name, dance.type, dance.year)));
        this.exampleDatabase = new ExampleDatabase(this.results);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }

    trackByIndex(index: number) {
        return index;
    }
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Dance[]> = new BehaviorSubject<Dance[]>([]);

    constructor(public array: Dance[]) {
        for (let dance of this.array) {
            this.addDances(dance);
        }
    }

    get data(): Dance[] {
        return this.dataChange.value;
    }

    addDances(dance: Dance) {
        const copiedData = this.data.slice();
        copiedData.push(dance);
        this.dataChange.next(copiedData);
    }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
        super();
    }

    connect(): Observable<Dance[]> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
        ];
        // return Observable.of(this._exampleDatabase.dataChange.getValue());
        return Observable.merge(...displayDataChanges).map(() => {
            const data = this._exampleDatabase.data.slice();

            // Grab the page's slice of data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        });
    }

    disconnect() {
    }
}

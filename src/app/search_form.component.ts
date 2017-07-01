import {Component}          from '@angular/core';
import {DanceService} from './dance.service';
import {Dance} from './dance';

@Component({
    selector: 'search-form',
    templateUrl: './search_form.component.html',
    // styleUrls: ['./search.component.css']
})
export class SearchFormComponent {
    years: number[] = [];
    results: Dance[] = [];

    constructor(private danceService: DanceService) {
        for (let i = 1924; i <= new Date().getFullYear(); i += 1) {
            this.years.push(i);
        }
    }

    searchSongs(name: string, creator: string, type: string, year: string) {
        this.danceService
            .getDances(name, creator, type, year)
            .then(dances => this.results = dances);
    }
}

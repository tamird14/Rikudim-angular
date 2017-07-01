import {Component}          from '@angular/core';

import {Dance}              from './dance';

@Component({
    selector: 'search-col',
    templateUrl: './search_col.component.html',
    // styleUrls: ['./search.component.css']
})
export class SearchColComponent {
    dance: string = '';
    creator: string = '';
    danceType: string = '';
    danceYear: string = '';
    searchResults: Dance[];
}

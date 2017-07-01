import {Injectable}     from '@angular/core';
import {Http}           from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Dance} from './dance';

@Injectable()
export class DanceService {

    /*private url = 'rikudim.info/search2.php';  // URL to web api*/

    constructor(private http: Http) {
    }

    getDances(name: string, creator: string, type: string, year: string): Promise<Dance[]> {
        /*let urlParam = '?id=0' + (name !== '' ? '&name=' + name : '') +
            (creator !== '' ? '&creator=' + creator : '') + (type !== '' ? '&type=' + type : '') +
            (year !== '' ? '&year=' + year : '');*/
        let url2 = 'http://localhost:3000/app/src/songs.json';
        return this.http.get(url2)
            .toPromise()
            .then(response => response.json().data as Dance[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

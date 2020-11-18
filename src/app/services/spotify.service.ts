import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) {
    console.log('servicio listo');
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBimvkcIXEl0cegOR_41u5HxRWXZYKufurYi2gghQ99MgTcRbNCdRF7K8K6J79Vi_wIQRxBpiHbE6jtzpE'
    });

    return this.http.get(url, { headers });
  }



  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
                    .pipe(map(data => data['albums'].items));

  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                    .pipe(map(data => data['artists'].items ));

  }
}

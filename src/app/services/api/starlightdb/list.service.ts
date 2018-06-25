import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hosts } from '../../../constants/api/hosts';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: Http) { }

  public fetchCharList(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      // request url
      const requestUrl = Hosts.API_HOST_STARLIGHTDB + '/api/v1/list/char_t';

      // connection
      this.http.get(requestUrl).subscribe(data => {
        if (data.status !== 200) {
          console.log(`Web api connection failure. url=[${requestUrl}]`);
          reject(`Failure request ${requestUrl}`);
        }

        resolve(data.json()['result']);

        console.log(`request=${requestUrl} response=${data.status}`);
      });
    });
  }
}

import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { Hosts } from '../../constants/api/hosts';
import { Character } from '../../models/api/imasdb/character';
import { Profile } from '../../models/api/imasdb/profile';

@Injectable()
export class ImasdbService {

  public char: Character;
  public prof: Profile;

  constructor(private jsonp: Jsonp) { }

  /**
   * キャラクター単体情報取得APIを呼び出し
   *
   * @param name
   * @param incProfile
   */
  public findCharInfo(name: string, incProfile: boolean) {
    const baseUrl = Hosts.API_HOST_IMASDB + '/character/lookup';

    // validate
    if (name.length < 1) {
      return null;
    }

    // request url
    const requestUrl = baseUrl + '?' + encodeURI(`name=${name}&include_profile=${incProfile}&callback=JSONP_CALLBACK`);

    // connection
    this.jsonp.get(requestUrl).subscribe(data => {
      if (data.status !== 200) {
        console.log(`Web api connection failure. url=[${requestUrl}]`);
        return '';
      }

      const charInfo = data.json()['character_list'][0];

      const char = new Character();
      char.fillFromJSON(charInfo, true);

      this.char = char;
    });
  }

}

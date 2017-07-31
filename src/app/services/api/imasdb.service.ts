import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { Hosts } from '../../constants/api/hosts';
import { Character } from '../../models/api/imasdb/character';
import { Profile } from '../../models/api/imasdb/profile';

@Injectable()
export class ImasdbService {

  public char: Character;

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
      const response = data.json();

      if (data.status !== 200) {
        console.log(`Web api connection failure. url=[${requestUrl}]`);
        return '';
      }

      const charInfo = data.json()['character_list'][0];

      const char = new Character(
        charInfo['id'],
        charInfo['name'],
        charInfo['name_ruby'],
        charInfo['family_name'],
        charInfo['first_name'],
        charInfo['family_name_ruby'],
        charInfo['first_name_ruby'],
        charInfo['is_foreigner_name'],
        charInfo['birth_month'],
        charInfo['birth_day'],
        charInfo['gender'],
        charInfo['is_idol'],
        charInfo['character_type'],
        charInfo['arrival_date'],
        charInfo['origin_media'],
        charInfo['cv'],
        charInfo['class_name'],
      );

      this.char = char;
    });
  }

}

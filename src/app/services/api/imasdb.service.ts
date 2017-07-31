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

    if (name.length < 1) {
      return null;
    }

    const requestUrl = baseUrl + '?' + encodeURI(`name=${name}&include_profile=${incProfile}&callback=JSONP_CALLBACK`);

    this.jsonp.get(requestUrl).subscribe(data => {
      console.log(data);
    });

    // this.http.get(requestUrl, options).subscribe(json => {
    //   const char = new Character(
    //     json['id'],
    //     json['name'],
    //     json['name_ruby'],
    //     json['family_name'],
    //     json['first_name'],
    //     json['family_name_ruby'],
    //     json['first_name_ruby'],
    //     json['is_foreigner_name'],
    //     json['birth_month'],
    //     json['birth_day'],
    //     json['gender'],
    //     json['is_idol'],
    //     json['character_type'],
    //     json['arrival_date'],
    //     json['origin_media'],
    //     json['cv'],
    //     json['class_name'],
    //   );

    //   this.char = char;

    //   console.log(this.char);
    // });
  }

}

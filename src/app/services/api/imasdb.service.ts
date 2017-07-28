import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Hosts } from '../../constants/api/hosts';
import { Character } from '../../models/api/imasdb/character';
import { Profile } from '../../models/api/imasdb/profile';

@Injectable()
export class ImasdbService {

  public char: Character;

  constructor(private http: HttpClient) { }

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

    const requestUrl = baseUrl + '?' + encodeURI(`name=${name}&include_profile=${incProfile}`);
    const options = this.createRequestOption();

    this.http.get(requestUrl, options).subscribe(json => {
      const char = new Character(
        json['id'],
        json['name'],
        json['name_ruby'],
        json['family_name'],
        json['first_name'],
        json['family_name_ruby'],
        json['first_name_ruby'],
        json['is_foreigner_name'],
        json['birth_month'],
        json['birth_day'],
        json['gender'],
        json['is_idol'],
        json['character_type'],
        json['arrival_date'],
        json['origin_media'],
        json['cv'],
        json['class_name'],
      );

      this.char = char;

      console.log(this.char);
    });
  }

  /**
   * リクエストオプションを生成
   *
   * @see https://medium.com/@amcdnl/the-new-http-client-in-angular-4-3-754bd3ff83a8
   */
  private createRequestOption() {
    const reqOpts = {
      headers: new HttpHeaders()
    };

    reqOpts.headers.set('Content-Type', 'application/x-www-form-urlencoded;application/json;charset=utf-8');

    return reqOpts;
  }

}

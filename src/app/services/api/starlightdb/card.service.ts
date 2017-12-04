import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { Hosts } from '../../../constants/api/hosts';
import { Card } from '../../../models/api/starlightdb/card/card';

@Injectable()
export class CardService {

  public card: Card;

  constructor(private jsonp: Jsonp) { }

  /**
   * カード取得
   *
   * @param string name
   * @param string incProfile
   * @return void
   */
  public findCharInfo(cardNo: number): void {
    // request url
    const requestUrl = Hosts.API_HOST_STARLIGHTDB + '/api/v1/card_t/' + cardNo;

    // connection
    this.jsonp.get(requestUrl).subscribe(data => {
      if (data.status !== 200) {
        console.log(`Web api connection failure. url=[${requestUrl}]`);
        return '';
      }

      const res = data.json()['result'][0];
      const ignoreFields = ['rarity', 'chara', 'skill', 'leadSkill', 'valist'];

      /**
       * キャラクター情報をシリアライズ
       */
      const card = new Card();
      card.fillFromJSON(res, true, ignoreFields);
      this.card = card;
    });
  }

}

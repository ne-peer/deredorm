import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hosts } from '../../../constants/api/hosts';
import { Card } from '../../../models/api/starlightdb/card/card';

@Injectable()
export class CardService {

  public cards: Card[];

  constructor(private http: Http) { }

  /**
   * カード取得
   *
   * @param string name
   * @param string incProfile
   * @return void
   */
  public findCard(cardNo: string): void {
    // request url
    const requestUrl = Hosts.API_HOST_STARLIGHTDB + '/api/v1/card_t/' + cardNo;

    // connection
    this.http.get(requestUrl).subscribe(data => {
      if (data.status !== 200) {
        console.log(`Web api connection failure. url=[${requestUrl}]`);
        return '';
      }

      // json to object
      const res = data.json()['result'];
      const ignoreFields = ['rarity', 'chara', 'skill', 'leadSkill', 'valist'];

      const fetchedCards: Card[] = [];
      for (const oneCard of res) {
        const card = new Card();
        card.fillFromJSON(oneCard, true, ignoreFields);

        fetchedCards.push(card);
      }

      this.cards = fetchedCards;
    });
  }

}

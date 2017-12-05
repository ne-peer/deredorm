import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material';

import { Overview } from '../../../models/dere/overview';
import { Idol } from '../../../models/dere/idol';
import { ImasdbService } from '../../../services/api/imasdb.service';
import { GoToComponent } from '../../action/snack/go-to/go-to.component';
import { CardService } from '../../../services/api/starlightdb/card.service';

@Component({
  selector: 'app-dere-detail',
  templateUrl: './dere-detail.component.html',
  styleUrls: ['./dere-detail.component.css'],
  providers: [ImasdbService, CardService],
  entryComponents: [GoToComponent]
})
export class DereDetailComponent {

  // プロパティ
  overviews: Overview[];
  idols: Idol[];

  // 表示用
  overview: Overview;
  idol: Idol;

  /**
   * コンストラクタ
   */
  constructor(private activatedRoute: ActivatedRoute, private db: AngularFireDatabase,
    private imasdb: ImasdbService, private sldbCard: CardService, public snackBar: MatSnackBar) {

    this.db.list<Overview>('/core/dere_overview').valueChanges<Overview>().subscribe(ov => this.overviews = ov);
    this.db.list<Idol>('/core/dere_list').valueChanges<Idol>().subscribe(idols => this.idols = idols);

    // StarlightAPIからCardsを取得する処理
    const cardsFetch = (cards: number[]) => {
      const commaCards: string = cards.join();
      this.sldbCard.findCard(commaCards);
    };

    // Sulg取得＆idolのdetail取得
    this.activatedRoute.params.subscribe((params: Params) => {
      const requestName: string = params['name'];

      const fetchFirebasePromise = () => {
        return new Promise(resolve => {
          // fetch firebase
          this.db.object<Overview>(`/core/dere_overview/${requestName}`).valueChanges<Overview>().subscribe(ov => {
            this.overview = ov;
            this.db.object<Idol>(`/core/dere_list/${ov.id}`).valueChanges<Idol>().subscribe(idol => this.idol = idol);

            resolve(ov);
          });
        });
      };

      fetchFirebasePromise().then((ov: Overview) => {
        // fetch starlightdb api
        console.log(ov);
        cardsFetch(ov.sldb_cards);
      });

      // fetch imasdb api
      this.imasdb.findCharInfo(requestName, true);
    });
  }

  doShow() {
    const idol = JSON.stringify(this.idol);

    return idol !== '{"$value":null}';
  }

  isExists(array: any, haystack: string) {
    return array.indexOf(haystack) > 0;
  }

  goAnchor(anchor: string): void {
    window.location.hash = anchor;
  }

  /**
   * @see https://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/
   */
  getCharExtraStyle(): any {
    if (this.imasdb.char === undefined) {
      return {
        dispName: '',
        bgcolor: '#fff',
        color: '#000'
      };
    } else {
      return this.imasdb.char.getClassExtraInfo();
    }
  }

  isExistUnit(idol?: Idol): boolean {
    if (idol !== null && typeof idol === 'object' && Array.isArray(idol.units)) {
      return idol.units.length > 0;
    }
    return false;
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.sldbCard.cards); }

}

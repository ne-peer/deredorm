import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Overview } from '../../models/dere/overview';
import { Idol } from '../../models/dere/idol';
import { UnitUtilService } from '../../services/manage/unit-util.service';
import { ImasdbService } from '../../services/api/imasdb.service';

@Component({
  selector: 'app-dere-detail',
  templateUrl: './dere-detail.component.html',
  styleUrls: ['./dere-detail.component.css'],
  providers: [UnitUtilService, ImasdbService]
})
export class DereDetailComponent implements OnInit {

  // Firebaseと同期したもの
  afOverviews: FirebaseListObservable<Overview[]>;
  afIdols: FirebaseListObservable<Idol[]>;

  // プロパティ
  overviews: Overview[];
  idols: Idol[];

  // 表示用
  overview: Overview;
  idol: Idol;

  /**
   * コンストラクタ
   *
   * @param db AngularFireDatabase
   */
  constructor(private activatedRoute: ActivatedRoute, private db: AngularFireDatabase,
    private unitUtil: UnitUtilService, private imasdb: ImasdbService) {
    this.afOverviews = this.db.list('/core/dere_overview');
    this.afOverviews.subscribe(overviews => this.overviews = overviews);
    this.afIdols = this.db.list('/core/dere_list');
    this.afIdols.subscribe(idols => this.idols = idols);

    // Sulg取得＆DBアクセスと画面の更新
    this.activatedRoute.params.subscribe((params: Params) => {
      const afOverview = this.getOverview(params['name']);
      afOverview.subscribe(overview => {
        this.overview = overview;

        const afIdol = this.getIdol(overview.id);
        afIdol.subscribe(idol => this.idol = idol);
      });

      const dev = this.imasdb.finCharInfo(params['name'], true);
      console.log(dev);
    });
  }

  ngOnInit() {
  }

  getOverview(key: string): FirebaseObjectObservable<Overview> {
    return this.db.object(`/core/dere_overview/${key}`);
  }

  getIdol(key: string): FirebaseObjectObservable<Idol> {
    return this.db.object(`/core/dere_list/${key}`);
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

}

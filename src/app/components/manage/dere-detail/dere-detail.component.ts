import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';
import { MdSnackBar } from '@angular/material';

import { Overview } from '../../../models/dere/overview';
import { Idol } from '../../../models/dere/idol';
import { UnitUtilService } from '../../../services/manage/unit-util.service';
import { ImasdbService } from '../../../services/api/imasdb.service';
import { GoToComponent } from '../../action/snack/go-to/go-to.component';

@Component({
  selector: 'app-dere-detail',
  templateUrl: './dere-detail.component.html',
  styleUrls: ['./dere-detail.component.css'],
  providers: [UnitUtilService, ImasdbService],
  entryComponents: [GoToComponent]
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
    private unitUtil: UnitUtilService, private imasdb: ImasdbService, public snackBar: MdSnackBar) {
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

      this.imasdb.findCharInfo(params['name'], true);
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
    if (typeof idol === 'object' && Array.isArray(idol.units)) {
      return idol.units.length > 0;
    }
    return false;
  }

  openSnackBar() {
    this.snackBar.openFromComponent(GoToComponent, {
      duration: 500,
    });
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.imasdb.char); }

}

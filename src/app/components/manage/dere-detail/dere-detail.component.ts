import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material';

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
    private unitUtil: UnitUtilService, private imasdb: ImasdbService, public snackBar: MatSnackBar) {

    this.db.list<Overview>('/core/dere_overview').valueChanges<Overview>().subscribe(ov => this.overviews = ov);
    this.db.list<Idol>('/core/dere_list').valueChanges<Idol>().subscribe(idols => this.idols = idols);

    // Sulg取得＆idolのdetail取得
    this.activatedRoute.params.subscribe((params: Params) => {
      const requestName: string = params['name'];

      this.db.object<Overview>(`/core/dere_overview/${requestName}`).valueChanges<Overview>().subscribe(ov => {
        this.overview = ov;
        this.db.object<Idol>(`/core/dere_list/${ov.id}`).valueChanges<Idol>().subscribe(idol => this.idol = idol);
      });

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
  get diagnostic() { return JSON.stringify(this.imasdb.char); }

}

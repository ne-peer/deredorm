import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Unit } from '../../models/unit/unit';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {

  // Firebaseと同期したもの
  afUnits: FirebaseListObservable<Unit[]>;
  units: Unit[];

  // 表示用
  unit: Unit;

  constructor(private activatedRoute: ActivatedRoute, private db: AngularFireDatabase) {
    this.afUnits = this.db.list('/core/unit_list');

    // クエリストリング取得
    this.activatedRoute.params.subscribe((params: Params) => {
      const query: string = params['unit'];

      const afUnit = this.getUnit(query);
      afUnit.subscribe(unit => this.unit = unit);
    });
  }

  /**
   * 指定したユニットを取得
   *
   * @param string
   */
  getUnit(key: string): FirebaseObjectObservable<Unit> {
    return this.db.object(`/core/unit_list/${key}`);
  }

  ngOnInit() {
  }

  doShow() {
    const idol = JSON.stringify(this.unit);

    return idol !== '{"$value":null}';
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.unit); }

}

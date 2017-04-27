import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Promise } from 'firebase';

import { Unit } from '../../models/dere/unit';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {

  // Firebaseと同期したもの
  afUnits: FirebaseListObservable<Unit[]>;
  units: Unit[];

  // プロパティ
  query: string;

  // 表示用
  unit: Unit;

  constructor(private activatedRoute: ActivatedRoute, private af: AngularFire) {
    this.afUnits = this.af.database.list('/core/unit_list');

    // クエリストリング取得
    this.activatedRoute.params.subscribe((params: Params) => {
      this.query = params['unit'];
    });
  }

  /**
   * 指定したユニットを取得
   * 
   * @param string 
   */
  getUnit(key: string): FirebaseObjectObservable<Unit> {
    return this.af.database.object(`/core/unit_list/${key}`);
  }

  ngOnInit() {
    this.afUnits.subscribe(units => this.units = units);

    const unit = this.getUnit(this.query);
    unit.subscribe(aa => this.unit = aa);
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.unit); }

}

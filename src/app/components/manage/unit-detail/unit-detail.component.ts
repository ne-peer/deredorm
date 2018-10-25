import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

import { Unit } from '../../../models/unit/unit';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent {

  // 表示用
  units: Unit[];
  unit: Unit;

  /**
   * コンストラクタ
   */
  constructor(private activatedRoute: ActivatedRoute, private db: AngularFireDatabase) {
    this.db.list<Unit>('/core/unit_list').valueChanges().subscribe(units => this.units = units);

    // クエリストリング取得
    this.activatedRoute.params.subscribe((params: Params) => {
      const query: string = params['unit'];

      this.db.object<Unit>(`/core/unit_list/${query}`).valueChanges().subscribe(unit => this.unit = unit);
    });
  }

  doShow() {
    const idol = JSON.stringify(this.unit);

    return idol !== '{"$value":null}';
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.unit); }

}

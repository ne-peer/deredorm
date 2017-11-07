import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { Unit } from '../../../models/unit/unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent {

  // プロパティ
  units: Unit[];

  /**
   * コンストラクタ
   *
   * @param db AngularFireDatabase
   */
  constructor(private db: AngularFireDatabase) {
    this.db.list<Unit>('/core/unit_list').valueChanges<Unit>().subscribe(units => this.units = this.shuffle(units));
  }

  private shuffle(array: any) {
    let n = array.length, t, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  }

}

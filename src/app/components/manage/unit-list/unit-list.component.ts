import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Unit } from '../../../models/unit/unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  // Firebaseと同期したもの
  afUnits: FirebaseListObservable<Unit[]>;

  // プロパティ
  units: Unit[];

  /**
   * コンストラクタ
   *
   * @param db AngularFireDatabase
   */
  constructor(private db: AngularFireDatabase) {
    this.afUnits = this.db.list('/core/unit_list');
  }

  /**
   * 初期表示
   */
  ngOnInit() {
    this.afUnits.subscribe(units => this.units = this.shuffle(units));
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

  private isShowMember(index: number): boolean {
    return index < 5;
  }

}

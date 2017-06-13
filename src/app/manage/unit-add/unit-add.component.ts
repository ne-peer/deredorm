import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Unit } from '../../models/dere/unit';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent implements OnInit {

  // Firebaseと同期したもの
  units: FirebaseListObservable<Unit[]>;

  // 画面用オブジェクト
  unit = new Unit(null, null, null, null, null, null, null);
  types = ['cute', 'cool', 'passion'];

  // form
  submitted = false;

  /**
   * コンストラクタ
   * 
   * @param db AngularFireDatabase
   */
  constructor(private db: AngularFireDatabase) {
    this.units = this.db.list('/core/unit_list');
  }

  /**
   * 登録する
   */
  addUnit(): Promise<void> {
    return this.units.update(
      this.unit.id,
      {
        id: this.unit.id,
        kana: this.unit.kana,
        members: this.unit.members.split(','),
        name: this.unit.name,
        songs: this.unit.songs.split(','),
        tl: this.unit.tl,
        type: this.unit.type
      });
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.unit); }

  ngOnInit() {}

  onSubmit() { this.submitted = true; }

}

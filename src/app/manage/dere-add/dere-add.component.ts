import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';

@Component({
  selector: 'app-dere-add',
  templateUrl: './dere-add.component.html',
  styleUrls: ['./dere-add.component.css']
})
export class DereAddComponent implements OnInit {
//
//  // Firebaseと同期したもの
//  idols: FirebaseListObservable<Idol[]>;
//
//  // 画面用オブジェクト
//  idol = new Idol(null, null, null, null, null);
//  types = ['cute', 'cool', 'passion'];
//  
//  // form
//  submitted = false;
//
//  /**
//   * コンストラクタ
//   * 
//   * @param db AngularFireDatabase
//   */
//  constructor(private db: AngularFireDatabase) {
//    this.idols = this.db.list('/core/dere_list');
//  }
//
//  /**
//   * 登録する
//   */
//  addIdol(): Promise<void> {
//    return this.idols.update(
//      this.idol.name,
//      {
//        name: this.idol.name,
//        kana: this.idol.kana,
//        type: this.idol.type,
//        models: this.idol.models.split(','),
//        units: this.idol.units.split(',')
//      });
//  }
//
//  // かいはつよう
//  get diagnostic() { return JSON.stringify(this.idol); }
//
 ngOnInit() {}
//  
//  onSubmit() { this.submitted = true; }
//
}

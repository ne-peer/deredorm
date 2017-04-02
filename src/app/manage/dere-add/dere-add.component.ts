import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';

@Component({
  selector: 'app-dere-add',
  templateUrl: './dere-add.component.html',
  styleUrls: ['./dere-add.component.css']
})
export class DereAddComponent implements OnInit {

  // Firebaseと同期したもの
  idols: FirebaseListObservable<Idol[]>;

  // 画面用オブジェクト
  idol = new Idol(1, null, null, null);
  types = ['cute', 'cool', 'passion'];

  /**
   * コンストラクタ
   * 
   * @param af AngularFire
   */
  constructor(private af: AngularFire) {
    this.idols = this.af.database.list('/master/idol');
  }

  /**
   * 登録する
   */
  addIdol(): Promise<void> {
    return this.idols.push({
      id: this.idol.id,
      name: this.idol.name,
      type: this.idol.type
    });
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.idol); }

  ngOnInit() {
  }

}

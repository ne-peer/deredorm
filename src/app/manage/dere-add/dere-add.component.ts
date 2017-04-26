import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Promise } from 'firebase';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';

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
  idol = new Idol(null, null, null, null, null);
  types = ['cute', 'cool', 'passion'];

  // オートコンプリート用
  nameCtrl: FormControl;
  filteredNames: any;
  names = ['一ノ瀬志希', '鷺沢文香', '城ヶ崎美嘉'];

  /**
   * コンストラクタ
   * 
   * @param af AngularFire
   */
  constructor(private af: AngularFire) {
    this.idols = this.af.database.list('/master/idol');

    this.nameCtrl = new FormControl();
    this.filteredNames = this.nameCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.names.filter((s) => new RegExp(val, 'gi').test(s)) : this.names;
  }

  /**
   * 登録する
   */
  addIdol(): Promise<void> {
    return this.idols.push({
      name: this.idol.name,
      kana: this.idol.kana,
      type: this.idol.type,
      model: this.idol.models,
      group: this.idol.units
    });
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.idol); }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';
import { Unit } from '../../models/dere/unit';
import { UnitUtilService } from '../../services/manage/unit-util.service';

@Component({
  selector: 'app-dere-detail',
  templateUrl: './dere-detail.component.html',
  styleUrls: ['./dere-detail.component.css'],
  providers: [UnitUtilService]
})
export class DereDetailComponent implements OnInit {

  // Firebaseと同期したもの
  afIdols: FirebaseListObservable<Idol[]>;
  afUnits: FirebaseListObservable<Unit[]>;

  // プロパティ
  idols: Idol[];
  units: Unit[];

  // 表示用
  idol: Idol;

  /**
   * コンストラクタ
   * 
   * @param db AngularFireDatabase
   */
  constructor(private activatedRoute: ActivatedRoute, private db: AngularFireDatabase, private unitUtil: UnitUtilService) {
    this.afIdols = this.db.list('/core/dere_list');
    this.afUnits = this.db.list('/core/unit_list');
    this.afIdols.subscribe(idols => this.idols = idols);
    this.afUnits.subscribe(unit => this.units = unit);

    // Sulg取得＆DBアクセスと画面の更新
    this.activatedRoute.params.subscribe((params: Params) => {
      let afIdol = this.getIdol(params['idol']);
      afIdol.subscribe(idol => this.idol = idol);
    });
  }

  ngOnInit() {
  }

  /**
   * 指定したPersonを取得
   * 
   * @param string 
   */
  getIdol(key: string): FirebaseObjectObservable<Idol> {
    return this.db.object(`/core/dere_list/${key}`);
  }

  doShow() {
    let idol = JSON.stringify(this.idol);

    return idol !== '{"$value":null}';
  }

}

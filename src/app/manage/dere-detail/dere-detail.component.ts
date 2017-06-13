import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';
import { Unit } from '../../models/dere/unit';

@Component({
  selector: 'app-dere-detail',
  templateUrl: './dere-detail.component.html',
  styleUrls: ['./dere-detail.component.css']
})
export class DereDetailComponent implements OnInit {

  // Firebaseと同期したもの
  afIdols: FirebaseListObservable<Idol[]>;
  afUnits: FirebaseListObservable<Unit[]>;

  // プロパティ
  idols: Idol[];
  units: Unit[];
  query: string;

  // 表示用
  idol: Idol;

  /**
   * コンストラクタ
   * 
   * @param db AngularFireDatabase
   */
  constructor(private activatedRoute: ActivatedRoute, private db: AngularFireDatabase) {
    this.afIdols = this.db.list('/core/dere_list');
    this.afUnits = this.db.list('/core/unit_list');

    // クエリストリング取得
    this.activatedRoute.params.subscribe((params: Params) => {
      this.query = params['idol'];
    });
  }

  /**
   * 初期表示
   */
  ngOnInit() {
    this.afIdols.subscribe(idols => this.idols = idols);

    const afIdol = this.getIdol(this.query);
    afIdol.subscribe(idol => this.idol = idol);

    this.afUnits.subscribe(unit => this.units = unit);
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

  getUnitName(unitId: string) {
    let matchedUnit = null;
    if (this.units.length < 1) {
      return '';
    }

    for (let unit of this.units) {
      if (unit.id === unitId) {
        matchedUnit = unit;
        break;
      }
    }
    
    if (matchedUnit === null) {
      return '';
    }

    return matchedUnit.name;
  }

}

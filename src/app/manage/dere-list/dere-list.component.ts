import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';
import { Unit } from '../../models/dere/unit';

@Component({
  selector: 'app-dere-list',
  templateUrl: './dere-list.component.html',
  styleUrls: ['./dere-list.component.css']
})
export class DereListComponent implements OnInit {

  // Firebaseと同期したもの
  afIdols: FirebaseListObservable<Idol[]>;
  afUnits: FirebaseListObservable<Unit[]>;

  // プロパティ
  idols: Idol[];
  units: Unit[];

  /**
   * コンストラクタ
   * 
   * @param db AngularFireDatabase
   */
  constructor(private db: AngularFireDatabase) {
    this.afIdols = this.db.list('/core/dere_list');
    this.afUnits = this.db.list('/core/unit_list');
  }

  /**
   * 初期表示
   */
  ngOnInit() {
    this.afIdols.subscribe(idols => this.idols = idols);
    this.afUnits.subscribe(unit => this.units = unit);
  }

  getUnitName(unitId: string) {
    let matchedUnit = null;
    if (this.units instanceof Array === false || this.units.length < 1) {
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

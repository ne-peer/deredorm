import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';
import { Unit } from '../../models/dere/unit';
import { UnitUtilService } from '../../services/manage/unit-util.service';

@Component({
  selector: 'app-dere-list',
  templateUrl: './dere-list.component.html',
  styleUrls: ['./dere-list.component.css'],
  providers: [UnitUtilService]
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
  constructor(private db: AngularFireDatabase, private unitUtil: UnitUtilService) {
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

}

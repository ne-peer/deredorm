import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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
   * @param af AngularFire
   */
  constructor(private af: AngularFire) {
    this.afIdols = this.af.database.list('/core/dere_list');
    this.afUnits = this.af.database.list('/core/unit_list');
  }

  /**
   * 初期表示
   */
  ngOnInit() {
    this.afIdols.subscribe(idols => this.idols = idols);
    this.afUnits.subscribe(unit => this.units = unit);
  }

}

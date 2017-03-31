import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';

@Component({
  selector: 'app-dere-list',
  templateUrl: './dere-list.component.html',
  styleUrls: ['./dere-list.component.css']
})
export class DereListComponent implements OnInit {

  // Firebaseと同期したもの
  afIdols: FirebaseListObservable<Idol[]>;

  // 表示用
  idols: Idol[];

  /**
   * コンストラクタ
   * 
   * @param af AngularFire
   */
  constructor(private af: AngularFire) {
    this.afIdols = this.af.database.list('/idols');
  }

  /**
   * 初期表示
   */
  ngOnInit() {
    this.afIdols.subscribe(idols => this.idols = idols);
  }

}

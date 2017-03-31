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
  // idols: FirebaseListObservable<Idol[]>;

  idols = [
    new Idol(1, "aaa", "cute", "thi sis mode"),
    new Idol(1, "aaa", "cute", "thi sis mode"),
    new Idol(1, "aaa", "cute", "thi sis mode"),
    new Idol(1, "aaa", "cute", "thi sis mode"),
  ];

  /**
   * コンストラクタ
   * 
   * @param af AngularFire
   */
  constructor(private af: AngularFire) {
    // this.idols = this.af.database.list('/idols');
  }

  ngOnInit() {
  }

}

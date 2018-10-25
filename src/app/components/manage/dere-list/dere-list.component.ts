import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Overview } from '../../../models/dere/overview';
import { Idol } from '../../../models/dere/idol';

@Component({
  selector: 'app-dere-list',
  templateUrl: './dere-list.component.html',
  styleUrls: ['./dere-list.component.css'],
})
export class DereListComponent {

  // プロパティ
  overviews: Overview[];
  idols: Idol[];

  /**
   * コンストラクタ
   *
   * @param db AngularFireDatabase
   */
  constructor(private db: AngularFireDatabase) {
    this.db.list<Overview>('/core/dere_overview').valueChanges().subscribe(ovs => this.overviews = this.shuffle(ovs));
    this.db.list<Idol>('/core/dere_list').valueChanges().subscribe(idols => this.idols = idols);
  }

  private shuffle(array: any) {
    let n = array.length, t, i;

    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }

    return array;
  }

}

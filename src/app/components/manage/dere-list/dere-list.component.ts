import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { Overview } from '../../../models/dere/overview';
import { Idol } from '../../../models/dere/idol';

@Component({
  selector: 'app-dere-list',
  templateUrl: './dere-list.component.html',
  styleUrls: ['./dere-list.component.css'],
})
export class DereListComponent implements OnInit {

  // プロパティ
  overviews: Overview[];
  idols: Idol[];

  /**
   * コンストラクタ
   *
   * @param db AngularFireDatabase
   */
  constructor(private db: AngularFireDatabase) {
    this.db.list<Overview>('/core/dere_overview').valueChanges<Overview>().subscribe(ovs => this.overviews = ovs);
    this.db.list<Idol>('/core/dere_list').valueChanges<Idol>().subscribe(idols => this.idols = idols);
  }

  ngOnInit() {
    this.overviews = this.shuffle(this.overviews);
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

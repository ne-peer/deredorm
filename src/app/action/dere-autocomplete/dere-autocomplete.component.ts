import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

import { Idol } from '../../models/dere/idol';

@Component({
  selector: 'app-dere-autocomplete',
  templateUrl: './dere-autocomplete.component.html',
  styleUrls: ['./dere-autocomplete.component.css']
})
export class DereAutocompleteComponent implements OnInit {

  // Firebaseと同期したもの
  afIdols: FirebaseListObservable<Idol[]>;

  // プロパティ
  idols: Idol[];

  // オートコンプリート用
  dereSearchCtrl: FormControl;
  filteredIdols: Observable<Idol[]>;

  constructor(private af: AngularFire) {
    this.afIdols = this.af.database.list('/core/dere_list');
  }

  ngOnInit() {
    this.idols = [];

    this.afIdols.subscribe(snapshot => {
      this.idols = snapshot;
    });

    this.dereSearchCtrl = new FormControl();
    this.filteredIdols = this.dereSearchCtrl.valueChanges
      .startWith(null)
      .map(idol => idol && typeof idol === 'object' ? idol.name : idol)
      .map(name => name ? this.filterIdols(name) : this.idols.slice());
  }

  filterIdols(query: string): Idol[] {
    return this.idols.filter(idol => new RegExp(`${query}`, 'gi').test(idol.kana));
  }

  displayFn(idol: Idol): string {
    return idol ? idol.name : 'ひ';
  }

}

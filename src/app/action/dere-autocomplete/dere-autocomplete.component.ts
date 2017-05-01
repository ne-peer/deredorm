import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FormControl } from '@angular/forms';
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
  filteredIdols: any;
  suggests = [];

  constructor(private af: AngularFire) {
    this.afIdols = this.af.database.list('/core/dere_list');
    
    this.dereSearchCtrl = new FormControl();
    this.filteredIdols = this.dereSearchCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterIdols(name));
  }

  filterIdols(val: string) {
    return val ? this.suggests.filter(s => new RegExp(`${val}`, 'gi').test(s)) : this.suggests;
  }

  ngOnInit() {
    this.afIdols.subscribe(snapshot => {
      for (let idol of snapshot) {
        this.suggests.push(idol.name);
      }

      this.idols = snapshot;
    });
  }

}

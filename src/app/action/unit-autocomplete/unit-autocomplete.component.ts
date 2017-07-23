import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Unit } from '../../models/unit/unit';

@Component({
  selector: 'app-unit-autocomplete',
  templateUrl: './unit-autocomplete.component.html',
  styleUrls: ['./unit-autocomplete.component.css']
})
export class UnitAutocompleteComponent implements OnInit {

  // Firebaseと同期したもの
  afUnits: FirebaseListObservable<Unit[]>;

  // プロパティ
  units: Unit[];
  searchInput: any;

  // オートコンプリート用
  unitSearchCtrl: FormControl;
  filteredUnits: Observable<Unit[]>;

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.afUnits = this.db.list('/core/unit_list');
  }

  ngOnInit() {
    this.units = [];

    this.afUnits.subscribe(snapshot => {
      this.units = snapshot;
    });

    this.unitSearchCtrl = new FormControl();
    this.filteredUnits = this.unitSearchCtrl.valueChanges
      .startWith(null)
      .map(unit => unit && typeof unit === 'object' ? unit.name : unit)
      .map(name => name ? this.filterUnits(name) : this.units.slice());
  }

  filterUnits(query: string): Unit[] {
    return this.units.filter(unit => new RegExp(`${query}`, 'gi').test(unit.name));
  }

  displayFn(unit: Unit): string {
    return unit ? unit.name : '';
  }

  onSearch() {
    const input = this.getInputQuery();

    if (input === '') {
      return false;
    }

    this.router.navigate(['/unit', input]);
    return false;
  }

  onClear() {
    this.searchInput = '';
    return false;
  }

  getInputQuery() {
    return typeof this.searchInput === 'object' ? this.searchInput.id : this.searchInput;
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.searchInput); }

}

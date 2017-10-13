import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Overview } from '../../../models/dere/overview';

@Component({
  selector: 'app-dere-autocomplete',
  templateUrl: './dere-autocomplete.component.html',
  styleUrls: ['./dere-autocomplete.component.css']
})
export class DereAutocompleteComponent implements OnInit {

  // プロパティ
  afOverviews: Observable<Overview[]>;
  overviews: Overview[];
  searchInput: any;

  // オートコンプリート用
  dereSearchCtrl: FormControl;
  filteredOverviews: Observable<Overview[]>;

  /**
   * コンストラクタ
   */
  constructor(private db: AngularFireDatabase, private router: Router) {
    this.afOverviews = this.db.list<Overview>('/core/dere_overview').valueChanges<Overview>();
  }

  ngOnInit() {
    this.overviews = [];
    this.afOverviews.subscribe(ovs => this.overviews = ovs);

    this.dereSearchCtrl = new FormControl();
    this.filteredOverviews = this.dereSearchCtrl.valueChanges
      .startWith(null)
      .map(overview => overview && typeof overview === 'object' ? overview.name : overview)
      .map(name => name ? this.filterOverviews(name) : this.overviews.slice());
  }

  filterOverviews(query: string): Overview[] {
    return this.overviews.filter(overview => new RegExp(`${query}`, 'gi').test(overview.kana));
  }

  displayFn(overview: Overview): string {
    return overview ? overview.name : '';
  }

  onSearch() {
    const input = this.getInputQuery();

    if (input === '') {
      return false;
    }

    this.router.navigate(['/idol', input]);
    return false;
  }

  onClear() {
    this.searchInput = '';
    return false;
  }

  getInputQuery() {
    return typeof this.searchInput === 'object' ? this.searchInput.name : this.searchInput;
  }

  // かいはつよう
  get diagnostic() { return JSON.stringify(this.searchInput); }

}

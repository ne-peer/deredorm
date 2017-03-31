import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Promise } from 'firebase';

import { Idol } from '../../models/dere/idol';

@Component({
  selector: 'app-dere-add',
  templateUrl: './dere-add.component.html',
  styleUrls: ['./dere-add.component.css']
})
export class DereAddComponent implements OnInit {

  idols: FirebaseListObservable<Idol[]>;

  idol = new Idol(1, 'Kobayakawa Sae', 'cute', ''); 
  positions = ['cute', 'cool', 'passion'];

  constructor(private af: AngularFire) {
    this.idols = this.af.database.list('/idols');
  }

  onSubmit() {
    // on submit
  }

  addIdol(newHero: string): Promise<void> {
    return this.idols.push({
      id: 2,
      name: this.idol.name,
      position: this.idol.position,
      model: this.idol.model
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.idol); }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { Idol } from '../../models/dere/idol';

@Component({
  selector: 'app-dere-add',
  templateUrl: './dere-add.component.html',
  styleUrls: ['./dere-add.component.css']
})
export class DereAddComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
  model = new Idol(103, 'Kobayakawa Sae', 'cute', this.description);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}

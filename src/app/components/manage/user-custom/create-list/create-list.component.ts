import { Component, OnInit } from '@angular/core';

import { ListService } from '../../../../services/api/starlightdb/list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  public chars: Array<any>;

  constructor(private list: ListService) { }

  ngOnInit() {
    (async () => {
      this.chars = await this.list.fetchCharList();
    })();
  }

}

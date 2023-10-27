import { Component } from '@angular/core';
import { Cats } from 'src/app/interfaces/Cats';
import {ActivatedRoute} from '@angular/router';
import { ListService } from 'src/app/serivce/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  gatos?: Cats

  constructor(private listServices: ListService, private route: ActivatedRoute) {
    this.getCat();
  }

  getCat() {
    const id = this.route.snapshot.paramMap.get('id')
    this.listServices.getGato(id).subscribe((gato) => (this.gatos = gato))

  }

}

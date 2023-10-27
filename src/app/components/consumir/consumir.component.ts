import { Component } from '@angular/core';
import { ListService } from 'src/app/serivce/list.service';
import { Cats } from 'src/app/interfaces/Cats';

@Component({
  selector: 'app-consumir',
  templateUrl: './consumir.component.html',
  styleUrls: ['./consumir.component.css']
})
export class ConsumirComponent {

  constructor(private listService: ListService) {
    this.getCats();
  }

  gato: Cats [] = [];

  getCats(): void {
    this.listService.getGatos().subscribe((gatos) => (this.gato = gatos))
  }

}

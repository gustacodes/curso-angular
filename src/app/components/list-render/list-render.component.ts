import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: "Nick", type: "Dog", age: 1},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Frida", type: "Dog", age: 2},
    {name: "Bob", type: "Horse", age: 6}
  ]

  animalDetails = ''

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}!`
  }

}

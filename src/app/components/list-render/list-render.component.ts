import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { Person } from 'src/app/interfaces/Person';
import { ListService } from 'src/app/serivce/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService: ListService) {}

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

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
    
  }

  persons: Person[] = [
    {name: "Gustavo", age: 31},
    {name: "Pamella", age: 31}
  ]

  removePerson(person: Person) {
    this.persons = this.listService.removePerson(this.persons, person);
  }

}

import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { Person } from '../interfaces/Person';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  removePerson(persons: Person[], person: Person) {
    return persons.filter((p) => person.name !== p.name);
  }
  
}

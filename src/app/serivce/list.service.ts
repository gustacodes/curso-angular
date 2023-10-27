import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { Person } from '../interfaces/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cats } from '../interfaces/Cats';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'
  private apiCats = 'https://api.thecatapi.com/v1/images/search?limit=2'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getGatos(): Observable<Cats[]> {
    return this.http.get<Cats[]>(this.apiCats);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  removePerson(persons: Person[], person: Person) {
    return persons.filter((p) => person.name !== p.name);
  }
  
}

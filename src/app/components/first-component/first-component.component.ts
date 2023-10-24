import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Gustavo"
  age: number = 31
  hobbies = ['Jogar', 'Programar', 'Viajar']

  car = {
    name: "New Fiesta",
    year: 2013
  }

  constructor() { }

  ngOnInit(): void {
      
  }

}

import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import { USERS } from '../../mock-data/mock-person';

@Component({
  selector: 'app-personslist',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  Persons: Person[] = USERS;
  constructor() { }

  ngOnInit() {
  }

  onAddPerson(nameInput: HTMLInputElement, ageInput: HTMLInputElement) {
    let person: Person = new Person(nameInput.value, ageInput.valueAsNumber);
    this.Persons.push(person);
  }

}

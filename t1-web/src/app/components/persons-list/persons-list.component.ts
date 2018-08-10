import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../../model/person.model';
import { USERS } from '../../mock-data/mock-person';

@Component({
  selector: 'app-personslist',
  templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

    Persons: Person[] = USERS;
    @ViewChild('nameInput') nameIn: ElementRef;
    @ViewChild('ageInput') ageIn: ElementRef;
    constructor() { }

    ngOnInit() {
    }

    onAddPerson(nameInput: HTMLInputElement, ageInput: HTMLInputElement) {
    //let person: Person = new Person(nameInput.value, ageInput.valueAsNumber);
        let person: Person = new Person(this.nameIn.nativeElement.value, this.ageIn.nativeElement.value);
        this.Persons.push(person);
   // console.log(this.nameIn.nativeElement.value + " ; " + this.ageIn.nativeElement.value);

  }

}

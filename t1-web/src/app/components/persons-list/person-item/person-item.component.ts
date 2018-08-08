import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../model/person.model';

@Component({
  selector: 'app-personitem',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {

  @Input() user: Person;

  constructor() { }

  ngOnInit() {
  }

}

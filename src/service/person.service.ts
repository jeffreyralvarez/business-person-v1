import { Injectable } from '@nestjs/common';
import { Person, PersonResponse } from 'src/model/api/person';
//import { v4 as uuid } from 'uuid';

@Injectable()
export class PersonService {

  private _persons: PersonResponse[] = [
    {
      id: '1',
      name: 'pepe',
    },
    {
      id: '2',
      name: 'pepe2'
    },
  ];

  findPersonById(id: string): PersonResponse[] {
    return this._persons;
  }

  createPerson(person: Person): PersonResponse {
    const newPerson = {
      id: '3',
      name: 'lucho',
    };
    this._persons.push(newPerson);
    return newPerson;
  }
}
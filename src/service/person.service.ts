import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

  createPerson(): string {
    return 'Hello World!';
  }

  async findPersonById(id: string): Promise<string> {
    return 'pepito';
  }
}
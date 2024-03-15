import { Float, Query, Resolver, Int, Args, Mutation } from '@nestjs/graphql';
import { PersonService } from 'src/service/person.service';
import { Person, PersonResponse } from 'src/model/api/person';


@Resolver()
export class PersonResolver {

    constructor(private readonly personService : PersonService) {}

    @Query(() => [PersonResponse])
    getPerson(@Args('id') id : string): PersonResponse[] {
        return this.personService.findPersonById(id);
    }

    @Mutation(() => PersonResponse)
    createPerson(@Args('person') person: Person) : PersonResponse {
        return this.personService.createPerson(person);
    }
}
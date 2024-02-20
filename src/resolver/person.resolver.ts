import { Float, Query, Resolver, Int, Args, Mutation } from '@nestjs/graphql';
import { PersonService } from 'src/service/person.service';

@Resolver()
export class PersonResolver {

    constructor(
        private readonly personService : PersonService
    ) {}

    @Query(() => String, { name: 'getPerson'})
    async getPerson(@Args('id') id : string): Promise<string> {
        return this.personService.findPersonById(id);
    }

    @Mutation(() => String, { name: 'createPerson'})
    createPerson(@Args('person') person: String) : String {
        return this.personService.createPerson();
    }
}
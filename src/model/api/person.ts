import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class Person {

    @Field()
    id: string;

    @Field()
    name: string;

}

@ObjectType()
export class PersonResponse {

    @Field()
    id: string;

    @Field()
    name: string;

 
}
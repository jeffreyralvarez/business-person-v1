import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; 
import { PersonResolver } from './resolver/person.resolver';
import { PersonService } from './service/person.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schemas/schema.gql'),
      debug: true,
      playground: true
    }),
    
  ],
  controllers: [],
  providers: [PersonService,PersonResolver],
})
export class AppModule {}

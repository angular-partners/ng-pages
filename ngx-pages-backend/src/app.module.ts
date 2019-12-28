import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
// import { RecipesModule } from './recipes/recipes.module';
import { PagesModule } from './pages/pages.module';

@Module({
  controllers: [AppController],
  imports: [
    // RecipesModule,
    PagesModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      // installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [],
})
export class AppModule {}

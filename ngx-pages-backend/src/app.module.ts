import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { PagesModule } from './pages/pages.module';

@Module({
  controllers: [AppController],
  imports: [
    PagesModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      // installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot(),
  ],
  providers: [],
})
export class AppModule {}

import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { PagesArgs } from './dto/pages.args';
import { Page } from './models/page';
import { PagesService } from './pages.service';

const pubSub = new PubSub();

@Resolver(of => Page)
export class PagesResolver {
  constructor(private readonly pagesService: PagesService) {}

  @Query(returns => Page)
  async page(@Args('id') id: string): Promise<Page> {
    const page = await this.pagesService.findOneById(id);
    if (!page) {
      throw new NotFoundException(id);
    }
    return page;
  }

  @Query(returns => [Page])
  pages(@Args() pagesArgs: PagesArgs): Promise<Page[]> {
    return this.pagesService.findAll(pagesArgs);
  }
}

import { Injectable } from '@nestjs/common';
import { PagesArgs } from './dto/pages.args';
import { Page } from './models/page';
import { GithubService } from './github.service';

@Injectable()
export class PagesService {

  constructor(private readonly service: GithubService) {}

  async findOneById(id: string): Promise<Page> {
    return {} as any;
  }

  async findAll(pagesArgs: PagesArgs): Promise<Page[]> {

    this.service.test();
    return [] as Page[];
  }
}

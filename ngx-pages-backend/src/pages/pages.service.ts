import { Injectable } from '@nestjs/common';
import { PagesArgs } from './dto/pages.args';
import { Page } from './models/page';

@Injectable()
export class PagesService {

  async findOneById(id: string): Promise<Page> {
    return {} as any;
  }

  async findAll(pagesArgs: PagesArgs): Promise<Page[]> {
    return [] as Page[];
  }
}

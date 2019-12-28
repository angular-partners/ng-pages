import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PagesResolver } from './pages.resolver';
import { PagesService } from './pages.service';
import { GithubService } from './github.service';

@Module({
  providers: [
    PagesResolver,
    PagesService,
    GithubService,
    DateScalar],
})
export class PagesModule {}

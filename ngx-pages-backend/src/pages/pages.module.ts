import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DateScalar } from '../common/scalars/date.scalar';
import { GithubService } from './github.service';
import { PagesResolver } from './pages.resolver';
import { PagesService } from './pages.service';

@Module({
  providers: [
    PagesResolver,
    PagesService,
    GithubService,
    DateScalar],
    imports: [ConfigModule],
})
export class PagesModule {}

import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PagesResolver } from './pages.resolver';
import { PagesService } from './pages.service';

@Module({
  providers: [PagesResolver, PagesService, DateScalar],
})
export class PagesModule {}

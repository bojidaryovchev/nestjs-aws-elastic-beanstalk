import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}

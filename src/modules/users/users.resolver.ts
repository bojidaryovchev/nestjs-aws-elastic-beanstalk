import { Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './services/users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserEntity])
  async getUsers(): Promise<UserEntity[]> {
    return await this.usersService.getUsers();
  }
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class UserEntity implements User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;
}

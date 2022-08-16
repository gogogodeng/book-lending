import { Injectable } from '@nestjs/common';
import { EntityManager, InsertResult } from 'typeorm';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private entityManager: EntityManager) {}

  checkUser(user: any): Promise<User> {
    const repository = this.entityManager.getRepository(User);
    const res = repository.findOne({
      where: {
        username: user.username,
      },
    });
    return res;
  }

  register(user: any): Promise<InsertResult> {
    const repository = this.entityManager.getRepository(User);
    const userm = new User();
    userm.username = user.username;
    userm.password = user.password;
    const res = repository.insert(userm);
    return res;
  }
}

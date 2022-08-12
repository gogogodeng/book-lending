import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Role } from 'src/entity/role.entity';
import { RoleMenu } from 'src/entity/rolemenu.entity';

@Injectable()
export class AppService {
  constructor(private entityManager: EntityManager) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUser(): Promise<User[]> {
    const user = this.entityManager.getRepository(User);

    return user
      .createQueryBuilder('user')
      .leftJoinAndMapOne('user.role', Role, 'role', 'role.userId = user.id')
      .leftJoinAndMapOne(
        'role.rolemenu',
        RoleMenu,
        'rolemenu',
        'rolemenu.id = role.roleId',
      )
      .where('user.name = :name', { name: 'jack' })
      .select(
        `
          user.username as username,
          role.roleId as roleId,
          rolemenu.roleName as roleName
        `,
      )
      .getRawMany();

    // return user.query(
    //   `SELECT a.username, b.roleId, c.rolename
    //                     FROM bl_user a
    //                   LEFT JOIN bl_role b ON a.id = b.userId
    //                   LEFT JOIN bl_rolemenu c ON c.id = b.roleId
    //                   WHERE a.name = ? `,
    //   ['jack'],
    // );
  }
}

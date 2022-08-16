import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  companyId: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ nullable: true, length: 100 })
  name: string;

  @Column({ nullable: true })
  remark: string;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcryptjs.hashSync(this.password, 10);
  }
}

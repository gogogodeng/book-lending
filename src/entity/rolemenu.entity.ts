import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rolemenu')
export class RoleMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, comment: 'čåįžå·' })
  menucode: string;

  @Column({ nullable: true })
  rolename: string;
}

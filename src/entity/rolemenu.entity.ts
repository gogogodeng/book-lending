import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rolemenu')
export class RoleMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, comment: '菜单编号' })
  menucode: string;

  @Column({ nullable: true })
  rolename: string;
}

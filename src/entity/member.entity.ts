import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('member')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 100 })
  name: string;

  @Column({ nullable: true, length: 20 })
  phone: string;

  @Column()
  userId: number;

  @Column({
    type: 'datetime',
  })
  createtime: Date;

  @Column()
  status: number;
}

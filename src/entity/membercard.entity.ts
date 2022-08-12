import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('membercard')
export class MemberCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: number;

  @Column()
  cardtype: number;

  @Column({ nullable: true, type: 'decimal', scale: 2 })
  money: number;

  @Column({
    type: 'datetime',
  })
  createtime: Date;

  @Column({
    type: 'datetime',
  })
  overtime: Date;

  @Column()
  status: number;
}

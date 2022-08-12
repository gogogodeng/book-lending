import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 100 })
  name: string;

  @Column({ nullable: true, length: 100 })
  auth: string;

  @Column({ nullable: true, length: 20 })
  type: string;

  @Column({ nullable: true, type: 'decimal', scale: 2 })
  money: number;

  @Column({ nullable: true, length: 20, comment: '图书编号' })
  code: string;

  @Column({
    type: 'datetime',
  })
  createtime: Date;

  @Column()
  status: number;
}

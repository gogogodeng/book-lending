import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stock')
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookId: number;

  @Column({ comment: '总库存' })
  total: number;

  @Column({ comment: '当前库存' })
  current: number;
}

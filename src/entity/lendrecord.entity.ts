import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lendrecord')
export class LendRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookId: number;

  @Column()
  memberId: number;

  @Column({ nullable: true, length: 20, comment: '标记借出/归还/损耗' })
  type: string;

  @Column({
    type: 'datetime',
    comment: '操作时间',
  })
  actiontime: Date;

  @Column({ comment: '操作员工编号' })
  actionUserId: number;

  @Column()
  status: number;

  @Column({ nullable: true, comment: '操作备注' })
  remark: string;
}

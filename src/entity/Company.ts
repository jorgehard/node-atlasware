import { Subsidiary } from './Subsidiary';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  leader: number;

  @Column({
    default: 0,
    type: 'tinyint',
    width: 1,
  })
  status: number;

  @OneToMany(() => Subsidiary, (subsidiarys) => subsidiarys.company)
  subsidiarys: Subsidiary[];
}

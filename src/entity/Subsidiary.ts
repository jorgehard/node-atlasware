import { Company } from './Company';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Subsidiary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  short_name: string;

  @Column({
    default: 0,
    type: 'tinyint',
    width: 1,
  })
  status: number;

  @Column()
  leader: number;

  @ManyToOne(() => Company, (company) => company.id, {
    nullable: false,
  })
  company: Company;
}

import { Company } from '../entity/Company';

export interface ICompanysRepository {
  findAll(): Promise<Company[]>;
}

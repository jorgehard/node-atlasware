import { Company } from '../../entity/Company';
import { ICompanysRepository } from '../ICompanysRepository';
import { getRepository } from 'typeorm';

export class CompanyMysqlProvider implements ICompanysRepository {
  findAll(): Promise<Company[]> {
    const db = getRepository(Company);
    return db.find();
  }
}

import { ICompanysRepository } from '../../../repositories/ICompanysRepository';

class ListCompanyCase {
  constructor(private companysRepository: ICompanysRepository) {}
  async execute() {
    return await this.companysRepository.findAll();
  }
}

export default ListCompanyCase;

import { CompanyMysqlProvider } from '../../../repositories/implementations/CompanyMysqlProvider';
import ListCompanyCase from './ListCompanyCase';
import ListCompanyController from './ListCompanyController';

const companyMysqlProvider = new CompanyMysqlProvider();
const listCompanyCase = new ListCompanyCase(companyMysqlProvider);
const listCompanyController = new ListCompanyController(listCompanyCase);

export { listCompanyController };

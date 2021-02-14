import { Router } from 'express';
import { listCompanyController } from '../useCases/Company/ListCompanys';

const companyRoutes = Router();

companyRoutes.get('/companys', listCompanyController.handle);

export default companyRoutes;

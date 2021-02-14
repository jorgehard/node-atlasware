import { Request, Response } from 'express';
import ListCompanyCase from './ListCompanyCase';

class ListCompanyController {
  constructor(private listCompanyCase: ListCompanyCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const companys = await this.listCompanyCase.execute();
      return res.status(200).json(companys);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
export default ListCompanyController;

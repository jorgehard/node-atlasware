import { Response } from 'express';

class IndexController {
  static index(res: Response) {
    return res.json({ version: '1.0', status: 'Api rodando perfeitamente!' });
  }
}

export default IndexController;

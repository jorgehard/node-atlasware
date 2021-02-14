import { Response } from 'express';

class IndexController {
  static index(res: Response) {
    return console.log("teste")
  }
}

export default IndexController;

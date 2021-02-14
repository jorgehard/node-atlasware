import Product from '../entity/Product';
export interface IProductRepository {
  listAll(): Product[];
  save(): Promise<Product>;
}

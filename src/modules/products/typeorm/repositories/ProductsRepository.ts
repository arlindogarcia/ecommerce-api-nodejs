import { Repository, EntityRepository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | null> {
    const product = this.findOne({
      where: {
        name: name,
      },
    });

    return product;
  }
}
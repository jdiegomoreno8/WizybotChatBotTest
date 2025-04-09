import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class ProductsService {

  // Function to search for products in the CSV based on a query
  async searchProducts(query: string): Promise<any[]> {
    const products: any[] = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream('products_list.csv')
        .pipe(csv())
        .on('data', (data) => {
          // Assuming product name is in the 'name' column
          if (data.name.toLowerCase().includes(query.toLowerCase())) {
            products.push(data);
          }
        })
        .on('end', () => {
          resolve(products.slice(0, 2)); // Return only 2 products
        })
        .on('error', (err) => reject(err));
    });
  }
}

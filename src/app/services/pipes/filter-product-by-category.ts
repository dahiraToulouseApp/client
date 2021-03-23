import { Pipe, PipeTransform } from "@angular/core";
import { Category, Product } from "../../models/product";
import { ProductService } from "../product.service";

@Pipe({
  name: "filterByCategory",
})
export class FilterProductByCategory implements PipeTransform {
  transform(products: Product[], category: Category): Product[] {
    console.log(products);
    if (category === Category.ALL) {
      return products;
    } else {
      return products.filter((product) =>
        product.categories.includes(category)
      );
    }
  }
}

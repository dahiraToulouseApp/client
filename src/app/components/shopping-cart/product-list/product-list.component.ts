import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { Category, Product } from "../../../models/product";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent implements OnInit {
  productsList: Product[];
  categoryFilter = Category.ALL;
  searchData: FormGroup;
  Category = Category;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsList = this.route.snapshot.data["products"];
    console.log(this.productsList);

    this.searchData = new FormGroup({
      search: new FormControl(""),
    });

    this.searchData.valueChanges.subscribe((val) => {
      if (val.search === "") {
        this.productsList = this.route.snapshot.data["products"];
      }
    });
  }

  changeCategoryFilter(newCategory: Category) {
    this.categoryFilter = newCategory;
  }

  search(productName: string) {
    this.productsList = this.productsList.filter((product) =>
      product.name.startsWith(productName)
    );
  }
}

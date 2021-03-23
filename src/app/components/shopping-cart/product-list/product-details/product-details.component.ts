import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  private _id: string;
  product: Product;
  thumbimages = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.id;
        })
      )
      .subscribe((prodId) => {
        this._id = prodId;
        this.productService.getSingleProduct(this._id).subscribe((prod) => {
          this.product = prod;
          console.log(this.product);
          if (prod.image !== null) {
            this.thumbimages.push(prod.image);
          }
        });
      });
  }

  addToCart(id: string) {}
  increase() {}
  decrease() {}
}

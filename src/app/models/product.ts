export class Product {
  _id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
  discount?: number;
  weight?: string;
  categories: Category[];

  constructor(
    id: number,
    name: string,
    description = "",
    price = 0,
    image = "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png",
    categories = [Category.ALL]
  ) {
    this._id = id;
    this.name = name;
    this.price = price;
    this.desc = description;
    this.image = image;
    this.categories = categories;
  }
}

export enum Category {
  ALL = "ALL",
  FOOD = "FOOD",
  KHASSIDA = "KHASSIDA",
  CLOTHE = "CLOTHE",
}

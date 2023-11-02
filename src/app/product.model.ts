export class Product {
    productId: number;
    productName: string;
    productDescription: string;
    maximumRetailPrice: number;
    discountedPrice: number;
    numberOfRating: number;
    rating: number;
    totalSoldQuantity: number;
    isActive: boolean;
    quantityAvailableBySize: {  [key: string]: number  };
    brand: string;
    categories: string[];
    images: string[];
    releaseDate: Date;
  
    constructor(
      productId: number,
      productName: string,
      productDescription: string,
      maximumRetailPrice: number,
      discountedPrice: number,
      numberOfRating: number,
      rating: number,
      totalSoldQuantity: number,
      isActive: boolean,
      quantityAvailableBySize: {  [key: string]: number  },
      brand: string,
      categories: string[],
      images: string[],
      releaseDate: Date
    ) {
      this.productId = productId;
      this.productName = productName;
      this.productDescription = productDescription;
      this.maximumRetailPrice = maximumRetailPrice;
      this.discountedPrice = discountedPrice;
      this.numberOfRating = numberOfRating;
      this.rating = rating;
      this.totalSoldQuantity = totalSoldQuantity;
      this.isActive = isActive;
      this.quantityAvailableBySize = quantityAvailableBySize;
      this.brand = brand;
      this.categories = categories;
      this.images = images;
      this.releaseDate = releaseDate;
    }
  }
  
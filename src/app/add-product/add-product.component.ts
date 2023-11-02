import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
// import { ProductService } from './product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  


  productForm: FormGroup;
  
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  colors: String[] = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'BLACK', 'WHITE', 'OTHER'];
  selectedSize:any;
  qty:Number=10;
  // quantityAvailableBySize: any;

  constructor(private fb: FormBuilder, private productService: ProductServiceService) {
    this.productForm = this.fb.group({
      productName: '',
      productDescription: '',
      maximumRetailPrice: null,
      discountedPrice: null,
      numberOfRating:0,
      rating: 0,
      totalSoldQuantity: 0, 
      isActive: true,
      quantityAvailableBySize: this.fb.group({}),
      brand: '',
      categories: [], // Empty array for multiple select
      images: this.fb.array([]), // You can initialize with an empty array or with default values if needed
      releaseDate: null,
    });
    this.sizes.forEach(size => {
      this.quantityAvailableBySize.addControl(size, new FormControl(null, Validators.required));
    });
  }
  get quantityAvailableBySize(): FormGroup {
    return this.productForm.get('quantityAvailableBySize') as FormGroup;
  }

  // Helper method to get size form control
  getSizeControl(size: string): FormControl {
    return this.quantityAvailableBySize.get(size) as FormControl;
  }

  // Helper method to get quantity form control
  getQuantityControl(size: string): FormControl {
    return this.quantityAvailableBySize.get(size) as FormControl;
  }

  onSubmit() {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value as Product;
      console.log(product);
      // Call your service method to add the product
      // Reset the form after successful submission
      this.productService.addProduct(product).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          // Reset the form after successful submission
          this.productForm.reset();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
      this.productForm.reset();
    }

  // onSubmit() {
  //   // if (this.productForm.valid) {

  //     const product: Product = this.productForm.value as Product;
  //     console.log(product);
  //     // console.log(this.sizeForm);
  //     // console.log(this.selectedSize);
  //     // this.productService.addProduct(product).subscribe(
  //     //   (response) => {
  //     //     console.log('Product added successfully:', response);
  //     //     // Reset the form after successful submission
  //     //     this.productForm.reset();
  //     //   },
  //     //   (error) => {
  //     //     console.error('Error adding product:', error);
  //     //   }
  //     // );
  //   // }
  // }
}
}
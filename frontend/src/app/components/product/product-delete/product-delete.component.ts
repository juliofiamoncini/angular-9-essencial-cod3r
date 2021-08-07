import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
  };

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.productService.readById(id).subscribe((product) => (this.product = product));
  }

  deleteProduct(): void {
    const id = this.product.id?.toString();
    this.productService.delete(id as string).subscribe((product) => {
      this.productService.showMessage('Produto excluído!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

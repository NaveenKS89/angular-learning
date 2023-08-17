import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

	params: any;

	ngOnInit(): void {
		this.params = this.activatedRoute.snapshot.params['userId'];
		this.productService.getAllProductsPaginated(0, 10).subscribe({
			next: (data): void => {
				console.log(data);
			},
			error: (err): void => {
				console.log(err);
			},
		});
	}
}

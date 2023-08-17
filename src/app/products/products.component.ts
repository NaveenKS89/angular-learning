import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/api/products/product.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
	standalone: true,
	imports: [MatTableModule, MatPaginatorModule],
})
export class ProductsComponent implements OnInit, AfterViewInit {
	displayedColumns: string[] = ['title', 'price', 'description', 'category'];
	dataSource = new MatTableDataSource<ProductRepresentation>([]);

	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private httpClient: HttpClient, private productService: ProductService) {}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	ngOnInit(): void {
		this.productService.getAllProductsPaginated(0, 10).subscribe({
			next: (data): void => {
				console.log(data);
				this.dataSource = data;
			},
			error: (err): void => {
				console.log(err);
			},
		});
	}
}

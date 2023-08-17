import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
	private baseURL: string = 'https://api.escuelajs.co/api/v1/products';

	constructor(private httpClient: HttpClient) {}

	getAllProductsPaginated(offset: number, limit: number): Observable<any> {
		const productUrl: string = `${this.baseURL}?offset=${offset}&limit=${limit}`;
		return this.httpClient.get<any>(productUrl);
	}
}

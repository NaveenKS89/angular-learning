import { CategoryRepresentation } from './category-representation';

export interface ProductRepresentation {
	id?: number;
	title?: string;
	price?: number;
	description?: string;
	category?: CategoryRepresentation;
	images?: Array<string>;
}

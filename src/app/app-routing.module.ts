import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
	{
		path: '',
		component: MyFirstCompComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'about/:userId',
		component: AboutComponent,
	},
	{
		path: 'products',
		component: ProductsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

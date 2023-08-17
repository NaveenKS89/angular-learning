import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MyFirstService } from './services/my-first.service';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './services/api/products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		MyFirstCompComponent,
		MessageDetailsComponent,
		AboutComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [MyFirstService, ProductService],
	bootstrap: [AppComponent],
})
export class AppModule {}

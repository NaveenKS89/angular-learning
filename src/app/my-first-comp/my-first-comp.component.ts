import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
	selector: 'app-my-first-comp',
	templateUrl: './my-first-comp.component.html',
	styleUrls: ['./my-first-comp.component.scss'],
})
export class MyFirstCompComponent {
	name: String = '';
	email: String = '';
	message: String = '';
	isSubmitted: Boolean = false;
	messages: Array<any> = [];

	constructor(private service: MyFirstService) {
		this.messages = this.service.getAllMessages();
		this.isSubmitted = this.messages.length > 0;
	}

	onSubmit(): void {
		if (this.name && this.email && this.message) {
			this.service.insert({
				name: this.name,
				email: this.email,
				message: this.message,
			});
			this.isSubmitted = true;
		}
	}

	deleteMessage(index: number): void {
		this.service.deleteMessage(index);
	}
}

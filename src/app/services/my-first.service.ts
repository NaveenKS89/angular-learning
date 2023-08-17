import { Injectable } from '@angular/core';

@Injectable(/* {
	providedIn: 'root',
} */)
export class MyFirstService {
	messages: Array<any> = [];

	constructor() {
		this.init();
	}

	init(): void {
		this.insert({
			name: 'naveen',
			email: 'nav@gamil.com',
			message: 'Some',
		});
		this.insert({
			name: 'john',
			email: 'john@gamil.com',
			message: 'John',
		});
		this.insert({
			name: 'Evan',
			email: 'evan@gamil.com',
			message: 'Evan',
		});
	}

	insert(message: { name: String; email: String; message: String }): void {
		this.messages.push(message);
	}

	getAllMessages(): any[] {
		return this.messages;
	}

	deleteMessage(index: number): void {
		this.messages.splice(index, 1);
	}
}

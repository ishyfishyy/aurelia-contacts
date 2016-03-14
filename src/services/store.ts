import {Contact} from "./contact";
import {Constants} from "./constants";
import {inject} from 'aurelia-framework';
import {HttpClient} from "aurelia-fetch-client";
import 'fetch';
import {ObserverLocator} from "aurelia-binding";

@inject(HttpClient, ObserverLocator)
export class ContactStore {
	contacts: Array<Contact>;

	observerLocator: ObserverLocator;

	constructor(private http: HttpClient, observerLocator: ObserverLocator) {
		this.observerLocator = observerLocator;

		//localStorage.clear();
		this.contacts = JSON.parse(localStorage.getItem(Constants.STORAGE_CONTACTS));

		if (!this.contacts) {
			http.configure(config => {
				config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
			});
			http.fetch('users')
				.then(response => response.json())
				.then(users => {
					users.splice(5);
					this.contacts = users.map((user: { id: number, login: string, avatar_url: string, type: string }) => {
						let contact = new Contact();
						contact.id = user.id;
						contact.username = user.login;
						contact.email = user.login + "@email.com";
						contact.avatarUrl = user.avatar_url;
						contact.description = user.type;
						contact.checked = false;

						return contact;
					});
					this.updateStorage();
					this.applyObservers();
				})
			;
			console.log("Fetch");
		}

	}

	applyObservers(): void {
		this.contacts.forEach((e, i) => {
			this.observerLocator.getObserver(e, 'checked').subscribe(() => this.updateStorage());
		});
	}

	addNew(): void {
		let contact = new Contact();
		contact.id = this.getId();
		contact.username = "username";
		contact.email = "e-mail";

		this.observerLocator.getObserver(contact, 'checked').subscribe(() => this.updateStorage());

		this.contacts.push(contact);
		this.updateStorage();
	}

	add(contact: Contact): void {
		this.contacts.push(contact);
		this.updateStorage();
	}

	remove(contact: Contact): void {
		this.contacts.splice(this.contacts.indexOf(contact), 1);
		this.updateStorage();
	}

	save(contact: Contact) {
		return new Promise(executor => {
			let instance = JSON.parse(JSON.stringify(contact));
			let found: Contact = this.contacts.filter(x => x.id == contact.id)[0];

			if(found) {
				let index = this.contacts.indexOf(found);
				Object.assign(this.contacts[index], instance);
			} else {
				instance.id = this.getId();
				this.contacts.push(instance);
			}
			this.updateStorage();

			executor(instance);
		});
	}

	find(id: number) {
		console.log("find request?");
		return new Promise(executor => {
			let found: Contact = this.contacts.filter(x => x.id == id)[0];
			executor(found);
		});
		//return this.contacts.filter(x => x.id == id)[0];

	}

	private getId(): number {
		return Math.round(Math.random() * 100000);
	}

	updateStorage(): void {
		localStorage.setItem(Constants.STORAGE_CONTACTS, JSON.stringify(this.contacts));
		console.log("update storage");
	}
}

export class ContactUpdated {
	contact: Contact;

	constructor(contact: Contact) {
		this.contact = contact;
	}
}

export class ContactSelected {
	contact: Contact;

	constructor(contact: Contact) {
		this.contact = contact;
	}
}

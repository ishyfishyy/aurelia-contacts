import {ContactStore, ContactUpdated, ContactSelected} from "./services/store";
import {Contact} from "./services/contact";

import {EventAggregator} from "aurelia-event-aggregator";
import {inject} from "aurelia-dependency-injection";

@inject(ContactStore, EventAggregator)
export class ContactList {
	contactStore: ContactStore;
	selectedId: number = 0;

	selectedFilter: number = 0;
	filteredContacts: Array<Contact>;

	constructor(contactStore: ContactStore, eventAggregator: EventAggregator) {
		this.contactStore = contactStore;
		this.applyFilter(0);

		eventAggregator.subscribe(ContactSelected, x => this.select(x.contact))
		eventAggregator.subscribe(ContactUpdated, x => {
			let id = x.contact.id;
			let found = this.contacts.filter(c => c.id == id)[0];

			Object.assign(found, x.contact);
		});
	}

	private get contacts(): Array<Contact> {
		return this.contactStore.contacts;
	}

	applyFilter(type: number): void {
		switch(type) {
			case 0:
				this.selectedFilter = 0;
				this.filteredContacts = this.contacts;
				break;
			case 1:
				this.selectedFilter = 1;
				this.filteredContacts = this.contacts.filter(x => x.checked == false);
				break;
			case 2:
				this.selectedFilter = 2;
				this.filteredContacts = this.contacts.filter(x => x.checked == true);
				break;
		}
	}

	select(contact: Contact): void {
		console.log("selected contact " + contact.username + " " + contact.id);

		this.selectedId = contact.id;
	}

	addNew(): void {
		this.contactStore.addNew();
		this.applyFilter(this.selectedFilter);
	}
}
import {Contact} from "./services/contact";
import {ContactStore, ContactSelected, ContactUpdated} from "./services/store";

import {autoinject} from 'aurelia-framework';
import {inject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";
import {RouterConfiguration} from "aurelia-router";

@inject(ContactStore, EventAggregator)
export class ContactDetail {
	eventAggregator: EventAggregator;
	routeConfig: RouterConfiguration;

	selectedContact: Contact;
	originalContact: Contact;

	constructor(private _contactStore: ContactStore, eventAggregator: EventAggregator) {
		this.eventAggregator = eventAggregator;
	}

	activate(params: any, routeConfig: RouterConfiguration) {
		this.routeConfig = routeConfig;

		return this._contactStore.find(params.id).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(contact));
			this.originalContact = contact;

			this.eventAggregator.publish(new ContactSelected(contact));
		});
	}

	save(): void {
		this._contactStore.save(this.selectedContact).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
			this.originalContact = contact;

			this.eventAggregator.publish(new ContactUpdated(contact));
		});
	}

	get canSave(){
		return this.selectedContact.username && this.selectedContact.email;
	}

	canDeactivate(){
		if(!this.areEqual(this.originalContact, this.selectedContact)){
			let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

			if(!result){
				this.eventAggregator.publish(new ContactSelected(this.selectedContact));
			}
			return result;
		}

		return true;
	}

	private areEqual(obj1, obj2): boolean {
		return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
	};
}

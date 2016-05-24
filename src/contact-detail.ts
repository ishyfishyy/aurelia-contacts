import {Contact} from "./services/contact";
import {ContactStore} from "./services/store";

import {autoinject} from "aurelia-dependency-injection";
import {RouterConfiguration} from "aurelia-router";

@autoinject
export class ContactDetail {
	routeConfig: RouterConfiguration;

	selectedContact: Contact;
	originalContact: Contact;

	constructor(private _contactStore: ContactStore) {
	}

	activate(params: any, routeConfig: RouterConfiguration) {
		this.routeConfig = routeConfig;

		return this._contactStore.find(params.id).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(contact));
			this.originalContact = contact;
		});
	}

	save(): void {
		this._contactStore.save(this.selectedContact).then((contact: Contact) => {
			this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
			this.originalContact = contact;
		});
	}

	get canSave(){
		return this.selectedContact.username && this.selectedContact.email;
	}

	canDeactivate(){
		if(!this.areEqual(this.originalContact, this.selectedContact)){
			return confirm('You have unsaved changes. Are you sure you wish to leave?');
		}
		return true;
	}

	private areEqual(obj1, obj2): boolean {
		return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
	}
}

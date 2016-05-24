import {ContactStore} from "./services/store";
import {Contact} from "./services/contact";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class ContactList {
	selectedId: number = 0;
	selectedFilter: number = 0;
	filteredContacts: Array<Contact>;

	constructor(private contactStore: ContactStore) {
		this.applyFilter(0);
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
		this.selectedId = contact.id;
	}

	remove(contact: Contact): void {
		this.contactStore.remove(contact);
	}

	addNew(): void {
		this.contactStore.addNew();
		this.applyFilter(this.selectedFilter);
	}

	// BENCHMARK
	TOTAL_COUNT: number = 1000;
	REPEAT_TIMES: number = 15;
	TIME_BETWEEN_TESTS: number = 1000;

	startTime: Date;
	average: Array<number>;

	private printDuration(final: boolean): void {
		window.setTimeout((end: boolean) => {
			var timing = +(new Date() - this.startTime);
			this.average.push(timing);
			//console.log("Rendering " + this.TOTAL_COUNT + " contacts took " + timing + " ms.");
			console.log(timing);

			if(end) {
				var sum = this.average.reduce((a, b) => a + b, 0);

				console.log("## Ending test ##");
				console.log();
				console.log("=> Average execution time: " + +(sum / this.REPEAT_TIMES) + " ms.");
			}
		}, 0, final);
	}

	private startTiming(): void {
		this.startTime = new Date();
	}

	public runRenderingTest(): void {
		this.average = [];

		console.log("## Starting test ##");

		for(var x = 0; x < this.REPEAT_TIMES; ++x) {
			setTimeout((idx: number) => {
				this.startTiming();

				var data: Array<Contact> = [];

				this.startTime = new Date();

				for (var i = 0; i < this.TOTAL_COUNT; ++i) {
					var contact: Contact = new Contact();
					contact.id = i;
					contact.username = "USERNAME " + Math.abs(Math.random());
					contact.email = "USERNAME@EMAIL.COM";
					contact.avatarUrl = "http://cdn2.hubspot.net/hub/245562/file-302950328-png/v3/ninja.png";
					contact.description = "DESCRIPTION!!!";

					data.push(contact);
				}
				this.filteredContacts = data;

				this.printDuration(idx === (this.REPEAT_TIMES - 1));
			}, 1000 + ((x + 1) * this.TIME_BETWEEN_TESTS), x);
		}
	}
}

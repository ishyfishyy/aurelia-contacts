"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const store_1 = require("./services/store");
const aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
const aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
let ContactList = class ContactList {
    constructor(contactStore, eventAggregator) {
        this.selectedId = 0;
        this.selectedFilter = 0;
        this.contactStore = contactStore;
        this.applyFilter(0);
        eventAggregator.subscribe(store_1.ContactSelected, x => this.select(x.contact));
        eventAggregator.subscribe(store_1.ContactUpdated, x => {
            let id = x.contact.id;
            let found = this.contacts.filter(c => c.id == id)[0];
            Object.assign(found, x.contact);
        });
    }
    get contacts() {
        return this.contactStore.contacts;
    }
    applyFilter(type) {
        switch (type) {
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
    select(contact) {
        console.log("selected contact " + contact.username + " " + contact.id);
        this.selectedId = contact.id;
    }
    remove(contact) {
        this.contactStore.remove(contact);
    }
    addNew() {
        this.contactStore.addNew();
        this.applyFilter(this.selectedFilter);
    }
};
ContactList = __decorate([
    aurelia_dependency_injection_1.inject(store_1.ContactStore, aurelia_event_aggregator_1.EventAggregator), 
    __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object])
], ContactList);
exports.ContactList = ContactList;
var _a;

//# sourceMappingURL=data:application/json;base64,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dC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0U3RvcmUsIENvbnRhY3RVcGRhdGVkLCBDb250YWN0U2VsZWN0ZWR9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vc2VydmljZXMvY29udGFjdFwiO1xyXG5cclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcblxyXG5AaW5qZWN0KENvbnRhY3RTdG9yZSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3Qge1xyXG5cdGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlO1xyXG5cdHNlbGVjdGVkSWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHNlbGVjdGVkRmlsdGVyOiBudW1iZXIgPSAwO1xyXG5cdGZpbHRlcmVkQ29udGFjdHM6IEFycmF5PENvbnRhY3Q+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb250YWN0U3RvcmU6IENvbnRhY3RTdG9yZSwgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHRcdHRoaXMuY29udGFjdFN0b3JlID0gY29udGFjdFN0b3JlO1xyXG5cdFx0dGhpcy5hcHBseUZpbHRlcigwKTtcclxuXHJcblx0XHRldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKENvbnRhY3RTZWxlY3RlZCwgeCA9PiB0aGlzLnNlbGVjdCh4LmNvbnRhY3QpKVxyXG5cdFx0ZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShDb250YWN0VXBkYXRlZCwgeCA9PiB7XHJcblx0XHRcdGxldCBpZCA9IHguY29udGFjdC5pZDtcclxuXHRcdFx0bGV0IGZvdW5kID0gdGhpcy5jb250YWN0cy5maWx0ZXIoYyA9PiBjLmlkID09IGlkKVswXTtcclxuXHJcblx0XHRcdE9iamVjdC5hc3NpZ24oZm91bmQsIHguY29udGFjdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0IGNvbnRhY3RzKCk6IEFycmF5PENvbnRhY3Q+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRhY3RTdG9yZS5jb250YWN0cztcclxuXHR9XHJcblxyXG5cdGFwcGx5RmlsdGVyKHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0c3dpdGNoKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAwO1xyXG5cdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMTtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSBmYWxzZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMjtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSB0cnVlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNlbGVjdChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlbGVjdGVkIGNvbnRhY3QgXCIgKyBjb250YWN0LnVzZXJuYW1lICsgXCIgXCIgKyBjb250YWN0LmlkKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdFN0b3JlLnJlbW92ZShjb250YWN0KTtcclxuXHR9XHJcblxyXG5cdGFkZE5ldygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdFN0b3JlLmFkZE5ldygpO1xyXG5cdFx0dGhpcy5hcHBseUZpbHRlcih0aGlzLnNlbGVjdGVkRmlsdGVyKTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

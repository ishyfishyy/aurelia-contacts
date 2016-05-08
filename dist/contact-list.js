System.register(["./services/store", "aurelia-event-aggregator", "aurelia-dependency-injection"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var store_1, aurelia_event_aggregator_1, aurelia_dependency_injection_1;
    var ContactList;
    return {
        setters:[
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }],
        execute: function() {
            ContactList = (function () {
                function ContactList(contactStore, eventAggregator) {
                    var _this = this;
                    this.selectedId = 0;
                    this.selectedFilter = 0;
                    this.contactStore = contactStore;
                    this.applyFilter(0);
                    eventAggregator.subscribe(store_1.ContactSelected, function (x) { return _this.select(x.contact); });
                    eventAggregator.subscribe(store_1.ContactUpdated, function (x) {
                        var id = x.contact.id;
                        var found = _this.contacts.filter(function (c) { return c.id == id; })[0];
                        Object.assign(found, x.contact);
                    });
                }
                Object.defineProperty(ContactList.prototype, "contacts", {
                    get: function () {
                        return this.contactStore.contacts;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContactList.prototype.applyFilter = function (type) {
                    switch (type) {
                        case 0:
                            this.selectedFilter = 0;
                            this.filteredContacts = this.contacts;
                            break;
                        case 1:
                            this.selectedFilter = 1;
                            this.filteredContacts = this.contacts.filter(function (x) { return x.checked == false; });
                            break;
                        case 2:
                            this.selectedFilter = 2;
                            this.filteredContacts = this.contacts.filter(function (x) { return x.checked == true; });
                            break;
                    }
                };
                ContactList.prototype.select = function (contact) {
                    console.log("selected contact " + contact.username + " " + contact.id);
                    this.selectedId = contact.id;
                };
                ContactList.prototype.remove = function (contact) {
                    this.contactStore.remove(contact);
                };
                ContactList.prototype.addNew = function () {
                    this.contactStore.addNew();
                    this.applyFilter(this.selectedFilter);
                };
                ContactList = __decorate([
                    aurelia_dependency_injection_1.inject(store_1.ContactStore, aurelia_event_aggregator_1.EventAggregator), 
                    __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object])
                ], ContactList);
                return ContactList;
                var _a;
            }());
            exports_1("ContactList", ContactList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LENBQUM7Z0JBdkRGO29CQUFDLHFDQUFNLENBQUMsb0JBQVksRUFBRSwwQ0FBZSxDQUFDOzsrQkFBQTtnQkF3RHRDLGtCQUFDOztZQUFELENBdkRBLEFBdURDLElBQUE7WUF2REQscUNBdURDLENBQUEiLCJmaWxlIjoiY29udGFjdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0U3RvcmUsIENvbnRhY3RVcGRhdGVkLCBDb250YWN0U2VsZWN0ZWR9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JlXCI7XHJcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vc2VydmljZXMvY29udGFjdFwiO1xyXG5cclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcblxyXG5AaW5qZWN0KENvbnRhY3RTdG9yZSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3Qge1xyXG5cdGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlO1xyXG5cdHNlbGVjdGVkSWQ6IG51bWJlciA9IDA7XHJcblxyXG5cdHNlbGVjdGVkRmlsdGVyOiBudW1iZXIgPSAwO1xyXG5cdGZpbHRlcmVkQ29udGFjdHM6IEFycmF5PENvbnRhY3Q+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb250YWN0U3RvcmU6IENvbnRhY3RTdG9yZSwgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHRcdHRoaXMuY29udGFjdFN0b3JlID0gY29udGFjdFN0b3JlO1xyXG5cdFx0dGhpcy5hcHBseUZpbHRlcigwKTtcclxuXHJcblx0XHRldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKENvbnRhY3RTZWxlY3RlZCwgeCA9PiB0aGlzLnNlbGVjdCh4LmNvbnRhY3QpKVxyXG5cdFx0ZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShDb250YWN0VXBkYXRlZCwgeCA9PiB7XHJcblx0XHRcdGxldCBpZCA9IHguY29udGFjdC5pZDtcclxuXHRcdFx0bGV0IGZvdW5kID0gdGhpcy5jb250YWN0cy5maWx0ZXIoYyA9PiBjLmlkID09IGlkKVswXTtcclxuXHJcblx0XHRcdE9iamVjdC5hc3NpZ24oZm91bmQsIHguY29udGFjdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0IGNvbnRhY3RzKCk6IEFycmF5PENvbnRhY3Q+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRhY3RTdG9yZS5jb250YWN0cztcclxuXHR9XHJcblxyXG5cdGFwcGx5RmlsdGVyKHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0c3dpdGNoKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSAwO1xyXG5cdFx0XHRcdHRoaXMuZmlsdGVyZWRDb250YWN0cyA9IHRoaXMuY29udGFjdHM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMTtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSBmYWxzZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyID0gMjtcclxuXHRcdFx0XHR0aGlzLmZpbHRlcmVkQ29udGFjdHMgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PSB0cnVlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNlbGVjdChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlbGVjdGVkIGNvbnRhY3QgXCIgKyBjb250YWN0LnVzZXJuYW1lICsgXCIgXCIgKyBjb250YWN0LmlkKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdGVkSWQgPSBjb250YWN0LmlkO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdFN0b3JlLnJlbW92ZShjb250YWN0KTtcclxuXHR9XHJcblxyXG5cdGFkZE5ldygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29udGFjdFN0b3JlLmFkZE5ldygpO1xyXG5cdFx0dGhpcy5hcHBseUZpbHRlcih0aGlzLnNlbGVjdGVkRmlsdGVyKTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
const aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
const aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
let ContactDetail = class ContactDetail {
    constructor(contactStore, eventAggregator) {
        this.contactStore = contactStore;
        this.eventAggregator = eventAggregator;
    }
    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
        return this.contactStore.find(params.id).then((contact) => {
            this.selectedContact = JSON.parse(JSON.stringify(contact));
            this.originalContact = contact;
            this.eventAggregator.publish(new store_1.ContactSelected(contact));
        });
    }
    save() {
        this.contactStore.save(this.selectedContact).then((contact) => {
            this.selectedContact = JSON.parse(JSON.stringify(this.selectedContact));
            this.originalContact = contact;
            this.eventAggregator.publish(new store_1.ContactUpdated(contact));
        });
    }
    get canSave() {
        return this.selectedContact.username && this.selectedContact.email;
    }
    canDeactivate() {
        if (!this.areEqual(this.originalContact, this.selectedContact)) {
            let result = confirm('You have unsaved changes. Are you sure you wish to leave?');
            if (!result) {
                this.eventAggregator.publish(new store_1.ContactSelected(this.selectedContact));
            }
            return result;
        }
        return true;
    }
    areEqual(obj1, obj2) {
        return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
    }
    ;
};
ContactDetail = __decorate([
    aurelia_dependency_injection_1.inject(store_1.ContactStore, aurelia_event_aggregator_1.EventAggregator), 
    __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object])
], ContactDetail);
exports.ContactDetail = ContactDetail;
var _a;

//# sourceMappingURL=data:application/json;base64,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c0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9zZXJ2aWNlcy9jb250YWN0XCI7XHJcbmltcG9ydCB7Q29udGFjdFN0b3JlLCBDb250YWN0VXBkYXRlZCwgQ29udGFjdFNlbGVjdGVkfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XHJcbmltcG9ydCB7Um91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XHJcblxyXG5AaW5qZWN0KENvbnRhY3RTdG9yZSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdERldGFpbCB7XHJcblx0Y29udGFjdFN0b3JlOiBDb250YWN0U3RvcmU7XHJcblx0ZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblx0cm91dGVDb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb247XHJcblxyXG5cdHNlbGVjdGVkQ29udGFjdDogQ29udGFjdDtcclxuXHRvcmlnaW5hbENvbnRhY3Q6IENvbnRhY3Q7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbnRhY3RTdG9yZTogQ29udGFjdFN0b3JlLCBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xyXG5cdFx0dGhpcy5jb250YWN0U3RvcmUgPSBjb250YWN0U3RvcmU7XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuXHR9XHJcblxyXG5cdGFjdGl2YXRlKHBhcmFtczogYW55LCByb3V0ZUNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG5cdFx0dGhpcy5yb3V0ZUNvbmZpZyA9IHJvdXRlQ29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNvbnRhY3RTdG9yZS5maW5kKHBhcmFtcy5pZCkudGhlbigoY29udGFjdDogQ29udGFjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xyXG5cdFx0XHR0aGlzLm9yaWdpbmFsQ29udGFjdCA9IGNvbnRhY3Q7XHJcblxyXG5cdFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0U2VsZWN0ZWQoY29udGFjdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzYXZlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb250YWN0U3RvcmUuc2F2ZSh0aGlzLnNlbGVjdGVkQ29udGFjdCkudGhlbigoY29udGFjdDogQ29udGFjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkQ29udGFjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZENvbnRhY3QpKTtcclxuXHRcdFx0dGhpcy5vcmlnaW5hbENvbnRhY3QgPSBjb250YWN0O1xyXG5cclxuXHRcdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFVwZGF0ZWQoY29udGFjdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXQgY2FuU2F2ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRDb250YWN0LnVzZXJuYW1lICYmIHRoaXMuc2VsZWN0ZWRDb250YWN0LmVtYWlsO1xyXG5cdH1cclxuXHJcblx0Y2FuRGVhY3RpdmF0ZSgpe1xyXG5cdFx0aWYoIXRoaXMuYXJlRXF1YWwodGhpcy5vcmlnaW5hbENvbnRhY3QsIHRoaXMuc2VsZWN0ZWRDb250YWN0KSl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBsZWF2ZT8nKTtcclxuXHJcblx0XHRcdGlmKCFyZXN1bHQpe1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IENvbnRhY3RTZWxlY3RlZCh0aGlzLnNlbGVjdGVkQ29udGFjdCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFyZUVxdWFsKG9iajEsIG9iajIpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhvYmoxKS5ldmVyeSgoa2V5KSA9PiBvYmoyLmhhc093blByb3BlcnR5KGtleSkgJiYgKG9iajFba2V5XSA9PT0gb2JqMltrZXldKSk7XHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

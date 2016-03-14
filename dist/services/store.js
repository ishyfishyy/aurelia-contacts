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
const contact_1 = require("./contact");
const constants_1 = require("./constants");
const aurelia_framework_1 = require('aurelia-framework');
const aurelia_fetch_client_1 = require("aurelia-fetch-client");
require('fetch');
const aurelia_binding_1 = require("aurelia-binding");
let ContactStore = class ContactStore {
    constructor(http, observerLocator) {
        this.http = http;
        this.observerLocator = observerLocator;
        //localStorage.clear();
        this.contacts = JSON.parse(localStorage.getItem(constants_1.Constants.STORAGE_CONTACTS));
        if (!this.contacts) {
            http.configure(config => {
                config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
            });
            http.fetch('users')
                .then(response => response.json())
                .then(users => {
                users.splice(5);
                this.contacts = users.map((user) => {
                    let contact = new contact_1.Contact();
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
            });
            console.log("Fetch");
        }
    }
    applyObservers() {
        this.contacts.forEach((e, i) => {
            this.observerLocator.getObserver(e, 'checked').subscribe(() => this.updateStorage());
        });
    }
    addNew() {
        let contact = new contact_1.Contact();
        contact.id = this.getId();
        contact.username = "username";
        contact.email = "e-mail";
        this.observerLocator.getObserver(contact, 'checked').subscribe(() => this.updateStorage());
        this.contacts.push(contact);
        this.updateStorage();
    }
    add(contact) {
        this.contacts.push(contact);
        this.updateStorage();
    }
    remove(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.updateStorage();
    }
    save(contact) {
        return new Promise(executor => {
            let instance = JSON.parse(JSON.stringify(contact));
            let found = this.contacts.filter(x => x.id == contact.id)[0];
            if (found) {
                let index = this.contacts.indexOf(found);
                Object.assign(this.contacts[index], instance);
            }
            else {
                instance.id = this.getId();
                this.contacts.push(instance);
            }
            this.updateStorage();
            executor(instance);
        });
    }
    find(id) {
        console.log("find request?");
        return new Promise(executor => {
            let found = this.contacts.filter(x => x.id == id)[0];
            executor(found);
        });
        //return this.contacts.filter(x => x.id == id)[0];
    }
    getId() {
        return Math.round(Math.random() * 100000);
    }
    updateStorage() {
        localStorage.setItem(constants_1.Constants.STORAGE_CONTACTS, JSON.stringify(this.contacts));
        console.log("update storage");
    }
};
ContactStore = __decorate([
    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient, aurelia_binding_1.ObserverLocator), 
    __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_fetch_client_1.HttpClient !== 'undefined' && aurelia_fetch_client_1.HttpClient) === 'function' && _a) || Object, (typeof (_b = typeof aurelia_binding_1.ObserverLocator !== 'undefined' && aurelia_binding_1.ObserverLocator) === 'function' && _b) || Object])
], ContactStore);
exports.ContactStore = ContactStore;
class ContactUpdated {
    constructor(contact) {
        this.contact = contact;
    }
}
exports.ContactUpdated = ContactUpdated;
class ContactSelected {
    constructor(contact) {
        this.contact = contact;
    }
}
exports.ContactSelected = ContactSelected;
var _a, _b;

//# sourceMappingURL=data:application/json;base64,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LENBQUE7QUFFRDtJQUdDLFlBQVksT0FBZ0I7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztBQUNGLENBQUM7QUFOWSx1QkFBZSxrQkFNM0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5pbXBvcnQge09ic2VydmVyTG9jYXRvcn0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50LCBPYnNlcnZlckxvY2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U3RvcmUge1xyXG5cdGNvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuXHJcblx0b2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3I7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgb2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3IpIHtcclxuXHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xyXG5cclxuXHRcdC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHR0aGlzLmNvbnRhY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuU1RPUkFHRV9DT05UQUNUUykpO1xyXG5cclxuXHRcdGlmICghdGhpcy5jb250YWN0cykge1xyXG5cdFx0XHRodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKS53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGh0dHAuZmV0Y2goJ3VzZXJzJylcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4odXNlcnMgPT4ge1xyXG5cdFx0XHRcdFx0dXNlcnMuc3BsaWNlKDUpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb250YWN0cyA9IHVzZXJzLm1hcCgodXNlcjogeyBpZDogbnVtYmVyLCBsb2dpbjogc3RyaW5nLCBhdmF0YXJfdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcclxuXHRcdFx0XHRcdFx0Y29udGFjdC5pZCA9IHVzZXIuaWQ7XHJcblx0XHRcdFx0XHRcdGNvbnRhY3QudXNlcm5hbWUgPSB1c2VyLmxvZ2luO1xyXG5cdFx0XHRcdFx0XHRjb250YWN0LmVtYWlsID0gdXNlci5sb2dpbiArIFwiQGVtYWlsLmNvbVwiO1xyXG5cdFx0XHRcdFx0XHRjb250YWN0LmF2YXRhclVybCA9IHVzZXIuYXZhdGFyX3VybDtcclxuXHRcdFx0XHRcdFx0Y29udGFjdC5kZXNjcmlwdGlvbiA9IHVzZXIudHlwZTtcclxuXHRcdFx0XHRcdFx0Y29udGFjdC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29udGFjdDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGx5T2JzZXJ2ZXJzKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkZldGNoXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGFwcGx5T2JzZXJ2ZXJzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb250YWN0cy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKGUsICdjaGVja2VkJykuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU3RvcmFnZSgpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkTmV3KCk6IHZvaWQge1xyXG5cdFx0bGV0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xyXG5cdFx0Y29udGFjdC5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuXHRcdGNvbnRhY3QudXNlcm5hbWUgPSBcInVzZXJuYW1lXCI7XHJcblx0XHRjb250YWN0LmVtYWlsID0gXCJlLW1haWxcIjtcclxuXHJcblx0XHR0aGlzLm9ic2VydmVyTG9jYXRvci5nZXRPYnNlcnZlcihjb250YWN0LCAnY2hlY2tlZCcpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVN0b3JhZ2UoKSk7XHJcblxyXG5cdFx0dGhpcy5jb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG5cdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0fVxyXG5cclxuXHRhZGQoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb250YWN0cy5wdXNoKGNvbnRhY3QpO1xyXG5cdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmUoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jb250YWN0cy5zcGxpY2UodGhpcy5jb250YWN0cy5pbmRleE9mKGNvbnRhY3QpLCAxKTtcclxuXHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cdH1cclxuXHJcblx0c2F2ZShjb250YWN0OiBDb250YWN0KSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IgPT4ge1xyXG5cdFx0XHRsZXQgaW5zdGFuY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpKTtcclxuXHRcdFx0bGV0IGZvdW5kOiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGNvbnRhY3QuaWQpWzBdO1xyXG5cclxuXHRcdFx0aWYoZm91bmQpIHtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLmNvbnRhY3RzLmluZGV4T2YoZm91bmQpO1xyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb250YWN0c1tpbmRleF0sIGluc3RhbmNlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbnN0YW5jZS5pZCA9IHRoaXMuZ2V0SWQoKTtcclxuXHRcdFx0XHR0aGlzLmNvbnRhY3RzLnB1c2goaW5zdGFuY2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlU3RvcmFnZSgpO1xyXG5cclxuXHRcdFx0ZXhlY3V0b3IoaW5zdGFuY2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmaW5kKGlkOiBudW1iZXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZmluZCByZXF1ZXN0P1wiKTtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvciA9PiB7XHJcblx0XHRcdGxldCBmb3VuZDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuZmlsdGVyKHggPT4geC5pZCA9PSBpZClbMF07XHJcblx0XHRcdGV4ZWN1dG9yKGZvdW5kKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly9yZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldElkKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVN0b3JhZ2UoKTogdm9pZCB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuU1RPUkFHRV9DT05UQUNUUywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0cykpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ1cGRhdGUgc3RvcmFnZVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXBkYXRlZCB7XHJcblx0Y29udGFjdDogQ29udGFjdDtcclxuXHJcblx0Y29uc3RydWN0b3IoY29udGFjdDogQ29udGFjdCkge1xyXG5cdFx0dGhpcy5jb250YWN0ID0gY29udGFjdDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VsZWN0ZWQge1xyXG5cdGNvbnRhY3Q6IENvbnRhY3Q7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuXHRcdHRoaXMuY29udGFjdCA9IGNvbnRhY3Q7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

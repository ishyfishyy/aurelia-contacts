System.register(["./contact", "./constants", 'aurelia-framework', "aurelia-fetch-client", 'fetch', "aurelia-binding"], function(exports_1, context_1) {
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
    var contact_1, constants_1, aurelia_framework_1, aurelia_fetch_client_1, aurelia_binding_1;
    var ContactStore, ContactUpdated, ContactSelected;
    return {
        setters:[
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (_1) {},
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }],
        execute: function() {
            ContactStore = (function () {
                function ContactStore(http, observerLocator) {
                    var _this = this;
                    this.http = http;
                    this.observerLocator = observerLocator;
                    //localStorage.clear();
                    this.contacts = JSON.parse(localStorage.getItem(constants_1.Constants.STORAGE_CONTACTS));
                    if (!this.contacts) {
                        http.configure(function (config) {
                            config.useStandardConfiguration().withBaseUrl('https://api.github.com/');
                        });
                        http.fetch('users')
                            .then(function (response) { return response.json(); })
                            .then(function (users) {
                            _this.contacts = users.map(function (user) {
                                var contact = new contact_1.Contact();
                                contact.id = user.id;
                                contact.username = user.login;
                                contact.email = user.login + "@email.com";
                                contact.avatarUrl = user.avatar_url;
                                contact.description = user.type;
                                contact.checked = false;
                                return contact;
                            });
                            _this.contacts = _this.contacts.splice(20);
                            _this.updateStorage();
                            _this.applyObservers();
                        });
                        console.log("Fetch");
                    }
                }
                ContactStore.prototype.applyObservers = function () {
                    var _this = this;
                    this.contacts.forEach(function (e, i) {
                        _this.observerLocator.getObserver(e, 'checked').subscribe(function () { return _this.updateStorage(); });
                    });
                };
                ContactStore.prototype.addNew = function () {
                    var _this = this;
                    var contact = new contact_1.Contact();
                    contact.id = this.getId();
                    contact.username = "username";
                    contact.email = "e-mail";
                    this.observerLocator.getObserver(contact, 'checked').subscribe(function () { return _this.updateStorage(); });
                    this.contacts.push(contact);
                    this.updateStorage();
                };
                ContactStore.prototype.add = function (contact) {
                    this.contacts.push(contact);
                    this.updateStorage();
                };
                ContactStore.prototype.remove = function (contact) {
                    this.contacts.splice(this.contacts.indexOf(contact), 1);
                    this.updateStorage();
                };
                ContactStore.prototype.save = function (contact) {
                    var _this = this;
                    return new Promise(function (executor) {
                        var instance = JSON.parse(JSON.stringify(contact));
                        var found = _this.contacts.filter(function (x) { return x.id == contact.id; })[0];
                        if (found) {
                            var index = _this.contacts.indexOf(found);
                            Object.assign(_this.contacts[index], instance);
                        }
                        else {
                            instance.id = _this.getId();
                            _this.contacts.push(instance);
                        }
                        _this.updateStorage();
                        executor(instance);
                    });
                };
                ContactStore.prototype.find = function (id) {
                    var _this = this;
                    console.log("find request?");
                    return new Promise(function (executor) {
                        var found = _this.contacts.filter(function (x) { return x.id == id; })[0];
                        executor(found);
                    });
                    //return this.contacts.filter(x => x.id == id)[0];
                };
                ContactStore.prototype.getId = function () {
                    return Math.round(Math.random() * 100000);
                };
                ContactStore.prototype.updateStorage = function () {
                    localStorage.setItem(constants_1.Constants.STORAGE_CONTACTS, JSON.stringify(this.contacts));
                    console.log("update storage");
                };
                ContactStore = __decorate([
                    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient, aurelia_binding_1.ObserverLocator), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_fetch_client_1.HttpClient !== 'undefined' && aurelia_fetch_client_1.HttpClient) === 'function' && _a) || Object, (typeof (_b = typeof aurelia_binding_1.ObserverLocator !== 'undefined' && aurelia_binding_1.ObserverLocator) === 'function' && _b) || Object])
                ], ContactStore);
                return ContactStore;
                var _a, _b;
            }());
            exports_1("ContactStore", ContactStore);
            ContactUpdated = (function () {
                function ContactUpdated(contact) {
                    this.contact = contact;
                }
                return ContactUpdated;
            }());
            exports_1("ContactUpdated", ContactUpdated);
            ContactSelected = (function () {
                function ContactSelected(contact) {
                    this.contact = contact;
                }
                return ContactSelected;
            }());
            exports_1("ContactSelected", ContactSelected);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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b0JBQUMsMEJBQU0sQ0FBQyxpQ0FBVSxFQUFFLGlDQUFlLENBQUM7O2dDQUFBO2dCQXlHcEMsbUJBQUM7O1lBQUQsQ0F4R0EsQUF3R0MsSUFBQTtZQXhHRCx1Q0F3R0MsQ0FBQTtZQUVEO2dCQUdDLHdCQUFZLE9BQWdCO29CQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQztnQkFDRixxQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsMkNBTUMsQ0FBQTtZQUVEO2dCQUdDLHlCQUFZLE9BQWdCO29CQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQztnQkFDRixzQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsNkNBTUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcbmltcG9ydCAnZmV0Y2gnO1xyXG5pbXBvcnQge09ic2VydmVyTG9jYXRvcn0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50LCBPYnNlcnZlckxvY2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U3RvcmUge1xyXG5cdGNvbnRhY3RzOiBBcnJheTxDb250YWN0PjtcclxuXHJcblx0b2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3I7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgb2JzZXJ2ZXJMb2NhdG9yOiBPYnNlcnZlckxvY2F0b3IpIHtcclxuXHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xyXG5cclxuXHRcdC8vbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcblx0XHR0aGlzLmNvbnRhY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuU1RPUkFHRV9DT05UQUNUUykpO1xyXG5cclxuXHRcdGlmICghdGhpcy5jb250YWN0cykge1xyXG5cdFx0XHRodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKS53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGh0dHAuZmV0Y2goJ3VzZXJzJylcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4odXNlcnMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250YWN0cyA9IHVzZXJzLm1hcCgodXNlcjogeyBpZDogbnVtYmVyLCBsb2dpbjogc3RyaW5nLCBhdmF0YXJfdXJsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcclxuXHRcdFx0XHRcdFx0Y29udGFjdC5pZCA9IHVzZXIuaWQ7XHJcblx0XHRcdFx0XHRcdGNvbnRhY3QudXNlcm5hbWUgPSB1c2VyLmxvZ2luO1xyXG5cdFx0XHRcdFx0XHRjb250YWN0LmVtYWlsID0gdXNlci5sb2dpbiArIFwiQGVtYWlsLmNvbVwiO1xyXG5cdFx0XHRcdFx0XHRjb250YWN0LmF2YXRhclVybCA9IHVzZXIuYXZhdGFyX3VybDtcclxuXHRcdFx0XHRcdFx0Y29udGFjdC5kZXNjcmlwdGlvbiA9IHVzZXIudHlwZTtcclxuXHRcdFx0XHRcdFx0Y29udGFjdC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY29udGFjdDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5jb250YWN0cyA9IHRoaXMuY29udGFjdHMuc3BsaWNlKDIwKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwbHlPYnNlcnZlcnMoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRmV0Y2hcIik7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0YXBwbHlPYnNlcnZlcnMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RzLmZvckVhY2goKGUsIGkpID0+IHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlckxvY2F0b3IuZ2V0T2JzZXJ2ZXIoZSwgJ2NoZWNrZWQnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVTdG9yYWdlKCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGROZXcoKTogdm9pZCB7XHJcblx0XHRsZXQgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XHJcblx0XHRjb250YWN0LmlkID0gdGhpcy5nZXRJZCgpO1xyXG5cdFx0Y29udGFjdC51c2VybmFtZSA9IFwidXNlcm5hbWVcIjtcclxuXHRcdGNvbnRhY3QuZW1haWwgPSBcImUtbWFpbFwiO1xyXG5cclxuXHRcdHRoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKGNvbnRhY3QsICdjaGVja2VkJykuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU3RvcmFnZSgpKTtcclxuXHJcblx0XHR0aGlzLmNvbnRhY3RzLnB1c2goY29udGFjdCk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHR9XHJcblxyXG5cdGFkZChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RzLnB1c2goY29udGFjdCk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0b3JhZ2UoKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZShjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRhY3RzLnNwbGljZSh0aGlzLmNvbnRhY3RzLmluZGV4T2YoY29udGFjdCksIDEpO1xyXG5cdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblx0fVxyXG5cclxuXHRzYXZlKGNvbnRhY3Q6IENvbnRhY3QpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvciA9PiB7XHJcblx0XHRcdGxldCBpbnN0YW5jZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29udGFjdCkpO1xyXG5cdFx0XHRsZXQgZm91bmQ6IENvbnRhY3QgPSB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gY29udGFjdC5pZClbMF07XHJcblxyXG5cdFx0XHRpZihmb3VuZCkge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IHRoaXMuY29udGFjdHMuaW5kZXhPZihmb3VuZCk7XHJcblx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNvbnRhY3RzW2luZGV4XSwgaW5zdGFuY2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGluc3RhbmNlLmlkID0gdGhpcy5nZXRJZCgpO1xyXG5cdFx0XHRcdHRoaXMuY29udGFjdHMucHVzaChpbnN0YW5jZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy51cGRhdGVTdG9yYWdlKCk7XHJcblxyXG5cdFx0XHRleGVjdXRvcihpbnN0YW5jZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZpbmQoaWQ6IG51bWJlcikge1xyXG5cdFx0Y29uc29sZS5sb2coXCJmaW5kIHJlcXVlc3Q/XCIpO1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yID0+IHtcclxuXHRcdFx0bGV0IGZvdW5kOiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5maWx0ZXIoeCA9PiB4LmlkID09IGlkKVswXTtcclxuXHRcdFx0ZXhlY3V0b3IoZm91bmQpO1xyXG5cdFx0fSk7XHJcblx0XHQvL3JldHVybiB0aGlzLmNvbnRhY3RzLmZpbHRlcih4ID0+IHguaWQgPT0gaWQpWzBdO1xyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0SWQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU3RvcmFnZSgpOiB2b2lkIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5TVE9SQUdFX0NPTlRBQ1RTLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnRhY3RzKSk7XHJcblx0XHRjb25zb2xlLmxvZyhcInVwZGF0ZSBzdG9yYWdlXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RVcGRhdGVkIHtcclxuXHRjb250YWN0OiBDb250YWN0O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb250YWN0OiBDb250YWN0KSB7XHJcblx0XHR0aGlzLmNvbnRhY3QgPSBjb250YWN0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZWxlY3RlZCB7XHJcblx0Y29udGFjdDogQ29udGFjdDtcclxuXHJcblx0Y29uc3RydWN0b3IoY29udGFjdDogQ29udGFjdCkge1xyXG5cdFx0dGhpcy5jb250YWN0ID0gY29udGFjdDtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

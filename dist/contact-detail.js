System.register(["./services/store", "aurelia-dependency-injection", "aurelia-event-aggregator"], function(exports_1, context_1) {
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
    var store_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1;
    var ContactDetail;
    return {
        setters:[
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            }],
        execute: function() {
            ContactDetail = (function () {
                function ContactDetail(_contactStore, eventAggregator) {
                    this._contactStore = _contactStore;
                    this.eventAggregator = eventAggregator;
                }
                ContactDetail.prototype.activate = function (params, routeConfig) {
                    var _this = this;
                    this.routeConfig = routeConfig;
                    return this._contactStore.find(params.id).then(function (contact) {
                        _this.selectedContact = JSON.parse(JSON.stringify(contact));
                        _this.originalContact = contact;
                        _this.eventAggregator.publish(new store_1.ContactSelected(contact));
                    });
                };
                ContactDetail.prototype.save = function () {
                    var _this = this;
                    this._contactStore.save(this.selectedContact).then(function (contact) {
                        _this.selectedContact = JSON.parse(JSON.stringify(_this.selectedContact));
                        _this.originalContact = contact;
                        _this.eventAggregator.publish(new store_1.ContactUpdated(contact));
                    });
                };
                Object.defineProperty(ContactDetail.prototype, "canSave", {
                    get: function () {
                        return this.selectedContact.username && this.selectedContact.email;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContactDetail.prototype.canDeactivate = function () {
                    if (!this.areEqual(this.originalContact, this.selectedContact)) {
                        var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                        if (!result) {
                            this.eventAggregator.publish(new store_1.ContactSelected(this.selectedContact));
                        }
                        return result;
                    }
                    return true;
                };
                ContactDetail.prototype.areEqual = function (obj1, obj2) {
                    return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
                };
                ;
                ContactDetail = __decorate([
                    aurelia_dependency_injection_1.inject(store_1.ContactStore, aurelia_event_aggregator_1.EventAggregator), 
                    __metadata('design:paramtypes', [store_1.ContactStore, (typeof (_a = typeof aurelia_event_aggregator_1.EventAggregator !== 'undefined' && aurelia_event_aggregator_1.EventAggregator) === 'function' && _a) || Object])
                ], ContactDetail);
                return ContactDetail;
                var _a;
            }());
            exports_1("ContactDetail", ContactDetail);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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SUFBQTtZQW5ERCx5Q0FtREMsQ0FBQSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vc2VydmljZXMvY29udGFjdFwiO1xyXG5pbXBvcnQge0NvbnRhY3RTdG9yZSwgQ29udGFjdFNlbGVjdGVkLCBDb250YWN0VXBkYXRlZH0gZnJvbSBcIi4vc2VydmljZXMvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcclxuaW1wb3J0IHtSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tIFwiYXVyZWxpYS1yb3V0ZXJcIjtcclxuXHJcbkBpbmplY3QoQ29udGFjdFN0b3JlLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGV0YWlsIHtcclxuXHRldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHRyb3V0ZUNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbjtcclxuXHJcblx0c2VsZWN0ZWRDb250YWN0OiBDb250YWN0O1xyXG5cdG9yaWdpbmFsQ29udGFjdDogQ29udGFjdDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFN0b3JlOiBDb250YWN0U3RvcmUsIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcclxuXHR9XHJcblxyXG5cdGFjdGl2YXRlKHBhcmFtczogYW55LCByb3V0ZUNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbikge1xyXG5cdFx0dGhpcy5yb3V0ZUNvbmZpZyA9IHJvdXRlQ29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLl9jb250YWN0U3RvcmUuZmluZChwYXJhbXMuaWQpLnRoZW4oKGNvbnRhY3Q6IENvbnRhY3QpID0+IHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbnRhY3QpKTtcclxuXHRcdFx0dGhpcy5vcmlnaW5hbENvbnRhY3QgPSBjb250YWN0O1xyXG5cclxuXHRcdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFNlbGVjdGVkKGNvbnRhY3QpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2F2ZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2NvbnRhY3RTdG9yZS5zYXZlKHRoaXMuc2VsZWN0ZWRDb250YWN0KS50aGVuKChjb250YWN0OiBDb250YWN0KSA9PiB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkQ29udGFjdCkpO1xyXG5cdFx0XHR0aGlzLm9yaWdpbmFsQ29udGFjdCA9IGNvbnRhY3Q7XHJcblxyXG5cdFx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDb250YWN0VXBkYXRlZChjb250YWN0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldCBjYW5TYXZlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZENvbnRhY3QudXNlcm5hbWUgJiYgdGhpcy5zZWxlY3RlZENvbnRhY3QuZW1haWw7XHJcblx0fVxyXG5cclxuXHRjYW5EZWFjdGl2YXRlKCl7XHJcblx0XHRpZighdGhpcy5hcmVFcXVhbCh0aGlzLm9yaWdpbmFsQ29udGFjdCwgdGhpcy5zZWxlY3RlZENvbnRhY3QpKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGxlYXZlPycpO1xyXG5cclxuXHRcdFx0aWYoIXJlc3VsdCl7XHJcblx0XHRcdFx0dGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ29udGFjdFNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRDb250YWN0KSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXJlRXF1YWwob2JqMSwgb2JqMik6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKG9iajEpLmV2ZXJ5KChrZXkpID0+IG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAob2JqMVtrZXldID09PSBvYmoyW2tleV0pKTtcclxuXHR9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

import {Router, RouterConfiguration} from "aurelia-router";

export class App {
    router: Router;

    constructor() {
    }

    configureRouter(config: RouterConfiguration, router: Router){
        config.title = 'Aurelia - Contacts';
        config.map([
            { route: '/',              name: '',             moduleId: 'no-selection',   title: 'Select'},
            { route: 'contacts',  name:'contacts',      moduleId: 'no-selection' },
            { route: 'contacts/:id',  name:'contacts',      moduleId: 'contact-detail' }
        ]);
        this.router = router;
    }
}
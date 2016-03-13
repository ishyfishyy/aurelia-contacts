import {Router} from "aurelia-router";
import {RouterConfiguration} from "aurelia-router";

export class App {
    router: Router;

    constructor() {
        console.log("App constructor");
    }

    configureRouter(config: RouterConfiguration, router: Router){
        console.log("geliyomu?");

        config.title = 'Aurelia - Contacts';
        config.map([
            { route: '',              name: '',             moduleId: 'no-selection',   title: 'Select'},
            { route: 'contacts/:id',  name:'contacts',      moduleId: 'contact-detail' }
        ]);
        this.router = router;
    }
}
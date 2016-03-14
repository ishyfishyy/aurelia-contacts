import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    console.log("configuration called?");

    aurelia.start().then(() => aurelia.setRoot());
}

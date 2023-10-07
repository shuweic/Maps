import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    }

    markerContent(): string {
        return `
            <div id="companyInfoPopup">
                <h1>Company Name: ${this.companyName}</h1>
                <h3>Catch Phrase: ${this.catchPhrase}</h3>
                <h3>lat: ${this.location.lat}</h3>
                <h3>lng: ${this.location.lng}</h3>
        `
    }
}
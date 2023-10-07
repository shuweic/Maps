import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";


export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        };
    }

    markerContent(): string {
        return `
            <div id="userInfoPopup">
                <h1>User Name: ${this.name}</h1>
                <h3>lat: ${this.location.lat}</h3>
                <h3>lng: ${this.location.lng}</h3>
            </div>
        `
    }

}


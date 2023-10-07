import { faker } from "@faker-js/faker";

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string {
        return `
            <div id="userInfoPopup">
                <h1>User Name: ${this.name}</h1>
                <h3>lat: ${this.location.lat}</h3>
                <h3>lng: ${this.location.lng}</h3>
            </div>
        `
    }

    constructor() {
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        };
    }
}


import { faker } from "@faker-js/faker";

export const firstName = faker.person.firstName();
export const lastName = faker.person.lastName();
export const email = faker.internet.email();
export const phone = faker.string.numeric(10);
export const address = faker.location.streetAddress();
export const city = faker.location.city();
export const state = faker.location.state();
export const zipCode = faker.location.zipCode();

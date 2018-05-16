export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  email: string;


  constructor(id?: number, firstName?: string, lastName?: string, streetAddress?: string, city?: string, zipCode?: string, phoneNumber?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.city = city;
    this.zipCode = zipCode;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

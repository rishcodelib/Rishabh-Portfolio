export class User {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  contact: Number;

  constructor(
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    contact: Number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.contact = contact;
  }
}

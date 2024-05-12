export class User {
  private firstName: String;
  private lastName: String;
  private email: String;
  private password: String;
  private contact: Number;

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
  public set setFirstName(firstName: String) {
    this.firstName = firstName;
  }
  public get getFirstName() {
    return this.firstName;
  }
  public get getLastName() {
    return this.lastName;
  }
  public get getContact() {
    return this.contact;
  }
  public get getEmail() {
    return this.email;
  }
  public set setLastName(lastName: String) {
    this.lastName = lastName;
  }
  public set setEmail(email: String) {
    this.email = email;
  }
  public set setPassword(password: String) {
    this.password = password;
  }
  public set setContact(contact: Number) {
    this.contact = contact;
  }
}

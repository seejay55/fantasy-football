export class User {
  _id;
  email;
  userName;
  firstName;
  lastName;

  constructor(_id: number, email: string, userName: string, firstName: string, lastName: string) {
    this._id = _id;
    this.email = email;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

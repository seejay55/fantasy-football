export class User {
  private _id;
  private email;
  private userName;
  private firstName;
  private lastName;

  constructor(_id: number, email: string, userName: string, firstName: string, lastName: string) {
    this._id = _id;
    this.email = email;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

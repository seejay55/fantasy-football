export class User {
  private _id;
  private userName;
  private firstName;
  private lastName;

  constructor(_id: number, userName: string, firstName: string, lastName: string) {
    this._id = _id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

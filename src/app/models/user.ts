export class User {
  private _id;
<<<<<<< HEAD
  private email;
=======
>>>>>>> Initial persistent user sign in functionality
  private userName;
  private firstName;
  private lastName;

<<<<<<< HEAD
  constructor(_id: number, email: string, userName: string, firstName: string, lastName: string) {
    this._id = _id;
    this.email = email;
=======
  constructor(_id: number, userName: string, firstName: string, lastName: string) {
    this._id = _id;
>>>>>>> Initial persistent user sign in functionality
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

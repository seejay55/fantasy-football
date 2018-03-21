export class Invite {
  senderId: number;
  senderUsername: string;
  senderFirstName: string;
  senderLastName: string;
  leagueId: number;
  leagueName: string;
  date: string;
  age: number;

  constructor(senderId, senderUsername, senderFirstName, senderLastName, leagueId, leagueName, date, age) {
    this.senderId = senderId;
    this.senderUsername = senderUsername;
    this.senderFirstName = senderFirstName;
    this.senderLastName = senderLastName;
    this.leagueId = leagueId;
    this.leagueName = leagueName;
    this.date = date;
    this.age = age;
  }
}

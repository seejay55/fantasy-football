export class League {
  _id: number;
  name: string;
  ownerId: number;
  ownerName: string;
  numMembers: number;

  year: string;
  maxTeams: number;
  typeScoring: number;
  leaguePrivacy: string;
  maxTrades: number;

  constructor(
    _id: number,
    name: string,
    ownerId: number,
    ownerName: string,
    numMembers: number,
    year: string,
    maxTeams: number,
    typeScoring: number,
    leaguePrivacy: string,
    maxTrades: number
  ) {
      this._id = _id;
      this.name = name;
      this.ownerId = ownerId;
      this.ownerName = ownerName;
      this.numMembers = numMembers;
      this.year = year;
      this.maxTeams = maxTeams;
      this.typeScoring = typeScoring;
      this.leaguePrivacy = leaguePrivacy;
      this.maxTrades = maxTrades;
    }

}

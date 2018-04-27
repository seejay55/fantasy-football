export class League {
  _id: number;
  name: string;
  ownerId: number;
  ownerName: string;
  numTeams: number;

  year: string;
  maxTeams: number;
  typeScoring: number;
  leaguePrivacy: string;
  maxTrades: number;
  teamName: string;

  constructor(
    _id: number,
    name: string,
    ownerId: number,
    ownerName: string,
    numTeams: number,
    year: string,
    maxTeams: number,
    typeScoring: number,
    leaguePrivacy: string,
    maxTrades: number,
    teamName: string
  ) {
      this._id = _id;
      this.name = name;
      this.ownerId = ownerId;
      this.ownerName = ownerName;
      this.numTeams = numTeams;
      this.year = year;
      this.maxTeams = maxTeams;
      this.typeScoring = typeScoring;
      this.leaguePrivacy = leaguePrivacy;
      this.maxTrades = maxTrades;
      this.teamName = teamName;
    }

}

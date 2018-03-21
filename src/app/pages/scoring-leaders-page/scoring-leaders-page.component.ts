import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoring-leaders-page',
  templateUrl: './scoring-leaders-page.component.html',
  styleUrls: ['./scoring-leaders-page.component.css']
})
export class ScoringLeadersPageComponent implements OnInit {

  teams;
  positions;

  ar12;
  threeJSON;
  allJSON;

  constructor() { }

  ngOnInit() {
    this.teams = ["All", "GB", "Min", "Det", "Chi", "Emoji Movie"]

    this.positions = ["ALL", "QB", "RB", "WR", "TE", "D/ST", "K", "FLEX"]

    this.ar12 = JSON.parse('{"PlayerName":"Aaron Rodgers","PlayerPos":"QB","TeamAbbr":"GB","Stats":[{"Name":"Passing Completions","GameStatValue":154},{"Name":"Incomplete Passes","GameStatValue":84},{"Name":"Passing Yards","GameStatValue":1675},{"Name":"Passing Touchdowns","GameStatValue":16},{"Name":"Interceptions Thrown","GameStatValue":6},{"Name":"Every Time Sacked","GameStatValue":22},{"Name":"300-399 Passing Yards Bonus","GameStatValue":3},{"Name":"Rushing Attempts","GameStatValue":24},{"Name":"Rushing Yards","GameStatValue":126},{"Name":"Fumbles Lost","GameStatValue":1},{"Name":"Fumble","GameStatValue":1},{"Name":"Fumbles Recovery","GameStatValue":1},{"Name":"Games Played","GameStatValue":16}]}');
    this.threeJSON = JSON.parse('[{"PlayerName":"San Francisco 49ers","PlayerPos":"DEF","TeamAbbr":"SF","Stats":[{"Name":"Sacks","GameStatValue":30},{"Name":"Interceptions","GameStatValue":10},{"Name":"Fumbles Recovered","GameStatValue":10},{"Name":"Fumbles Forced","GameStatValue":17},{"Name":"Touchdowns","GameStatValue":1},{"Name":"Kickoff and Punt Return Yards","GameStatValue":874},{"Name":"Points Allowed","GameStatValue":375},{"Name":"Points Allowed 7-13","GameStatValue":2},{"Name":"Points Allowed 14-20","GameStatValue":4},{"Name":"Points Allowed 21-27","GameStatValue":7},{"Name":"Points Allowed 28-34","GameStatValue":1},{"Name":"Points Allowed 35+","GameStatValue":2},{"Name":"Yards Allowed","GameStatValue":5625},{"Name":"100-199 Yards Allowed","GameStatValue":1},{"Name":"200-299 Yards Allowed","GameStatValue":2},{"Name":"300-399 Yards Allowed","GameStatValue":8},{"Name":"400-449 Yards Allowed","GameStatValue":3},{"Name":"450-499 Yards Allowed","GameStatValue":1},{"Name":"500+ Yards Allowed","GameStatValue":1},{"Name":"Games Played","GameStatValue":4}]},{"PlayerName":"Jared Abbrederis","PlayerPos":"WR","TeamAbbr":"","Stats":[{"Name":"Receiving Yards","GameStatValue":44},{"Name":"Tackle","GameStatValue":2},{"Name":"Assisted Tackles","GameStatValue":1},{"Name":"Forced Fumble","GameStatValue":1},{"Name":"Games Played","GameStatValue":14}]},{"PlayerName":"Ameer Abdullah","PlayerPos":"RB","TeamAbbr":"DET","Stats":[{"Name":"Rushing Yards","GameStatValue":552},{"Name":"Rushing Touchdowns","GameStatValue":4},{"Name":"Receptions","GameStatValue":25},{"Name":"Receiving Yards","GameStatValue":162},{"Name":"Receiving Touchdowns","GameStatValue":1},{"Name":"Kickoff and Punt Return Yards","GameStatValue":179},{"Name":"Fumbles Lost","GameStatValue":1},{"Name":"Fumble","GameStatValue":2},{"Name":"Tackle","GameStatValue":1},{"Name":"Games Played","GameStatValue":15}]},{"PlayerName":"Sam Acho","PlayerPos":"LB","TeamAbbr":"CHI","Stats":[{"Name":"Tackle","GameStatValue":29},{"Name":"Assisted Tackles","GameStatValue":16},{"Name":"Sack","GameStatValue":3},{"Name":"Forced Fumble","GameStatValue":1},{"Name":"Pass Defended","GameStatValue":1},{"Name":"Tackles for Loss Bonus","GameStatValue":2},{"Name":"QB Hit","GameStatValue":18},{"Name":"Sack Yards","GameStatValue":25},{"Name":"Games Played","GameStatValue":7}]}]')
    this.allJSON = JSON.parse(`[{
      "PlayerName": "San Francisco 49ers",
      "PlayerPos": "DEF",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Sacks",
        "GameStatValue": 30
      }, {
        "Name": "Interceptions",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 17
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 874
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 375
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 7
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5625
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Jared Abbrederis",
      "PlayerPos": "WR",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 44
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Ameer Abdullah",
      "PlayerPos": "RB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 552
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 25
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 162
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 179
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Sam Acho",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 29
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 25
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Kenneth Acker",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Andrew Adams",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Davante Adams",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 885
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 10
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jamal Adams",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Jerell Adams",
      "PlayerPos": "TE",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 92
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Mike Adams",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 48
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 42
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Montravius Adams",
      "PlayerPos": "DL",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jahleel Addae",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 30
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Mario Addison",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 11
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 15
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 70.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Nelson Agholor",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 7
      }, {
        "Name": "Receptions",
        "GameStatValue": 62
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 768
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Recovered for TD",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jamal Agnew",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 9
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 18
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 643
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Kamar Aiken",
      "PlayerPos": "WR",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 133
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jay Ajayi",
      "PlayerPos": "RB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 873
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 24
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 158
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "D.J. Alexander",
      "PlayerPos": "LB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Dominique Alexander",
      "PlayerPos": "LB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kwon Alexander",
      "PlayerPos": "LB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 27
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 70
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Lorenzo Alexander",
      "PlayerPos": "LB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 15
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 21
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Mackensie Alexander",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Maurice Alexander",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Robert Alford",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 20
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Beau Allen",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Chase Allen",
      "PlayerPos": "LB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Dwayne Allen",
      "PlayerPos": "TE",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 86
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Javorius Allen",
      "PlayerPos": "RB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 591
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 46
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 250
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Jonathan Allen",
      "PlayerPos": "DL",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Keenan Allen",
      "PlayerPos": "WR",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 9
      }, {
        "Name": "Receptions",
        "GameStatValue": 102
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1393
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Recovered for TD",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 32
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 27
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Nate Allen",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Ricardo Allen",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Geronimo Allison",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 253
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kiko Alonso",
      "PlayerPos": "LB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 36
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Tyson Alualu",
      "PlayerPos": "DL",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 27
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Danny Amendola",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 659
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 247
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "David Amerson",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Adrian Amos",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 90
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Prince Amukamara",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "C.J. Anderson",
      "PlayerPos": "RB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1007
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 28
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 224
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Derek Anderson",
      "PlayerPos": "QB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 2
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 6
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 17
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Henry Anderson",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jonathan Anderson",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Robby Anderson",
      "PlayerPos": "WR",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 9
      }, {
        "Name": "Receptions",
        "GameStatValue": 63
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 941
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Ryan Anderson",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Stephen Anderson",
      "PlayerPos": "TE",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 342
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Zaire Anderson",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 38
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Ezekiel Ansah",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 12
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 75
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Stephone Anthony",
      "PlayerPos": "LB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Alex Anzalone",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Eli Apple",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Arik Armstead",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Ray-Ray Armstrong",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 29
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Cameron Artis-Payne",
      "PlayerPos": "RB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 95
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Geno Atkins",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 20
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 65.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jeremiah Attaochu",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Antony Auclair",
      "PlayerPos": "TE",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 14
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Tavon Austin",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 270
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 13
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 47
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 66
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 4
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Denico Autry",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 43.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Cliff Avril",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Chidobe Awuzie",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Akeem Ayers",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Robert Ayers",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 16
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Johnson Bademosi",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Allen Bailey",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Dan Bailey",
      "PlayerPos": "K",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 20-29",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Budda Baker",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Chris Baker",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Doug Baldwin",
      "PlayerPos": "WR",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -8
      }, {
        "Name": "Receptions",
        "GameStatValue": 75
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 991
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Johnthan Banks",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Peyton Barber",
      "PlayerPos": "RB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 423
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 16
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 114
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Kenjon Barner",
      "PlayerPos": "RB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 57
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 56
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 434
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Derek Barnett",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 16
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 49.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Anthony Barr",
      "PlayerPos": "LB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Shaquil Barrett",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 19
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Mark Barron",
      "PlayerPos": "LB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 29
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Connor Barth",
      "PlayerPos": "K",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Connor Barwin",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 31
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Tarell Basham",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "David Bass",
      "PlayerPos": "LB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 16
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 16.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Daren Bates",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Chicago Bears",
      "PlayerPos": "DEF",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 14
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 14
      }, {
        "Name": "Safeties",
        "GameStatValue": 1
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1306
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 306
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5106
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Cole Beasley",
      "PlayerPos": "WR",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 314
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 19
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Vic Beasley",
      "PlayerPos": "LB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 36
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "C.J. Beathard",
      "PlayerPos": "QB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 123
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 101
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1430
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 6
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 19
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 26
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 136
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Odell Beckham",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 8
      }, {
        "Name": "Receptions",
        "GameStatValue": 25
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 302
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kendell Beckwith",
      "PlayerPos": "LB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Blake Bell",
      "PlayerPos": "TE",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 19
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Le'Veon Bell",
      "PlayerPos": "RB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1291
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 85
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 655
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Vonn Bell",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 28.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Josh Bellamy",
      "PlayerPos": "WR",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 24
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 376
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Nick Bellore",
      "PlayerPos": "LB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 9
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Cincinnati Bengals",
      "PlayerPos": "DEF",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 4
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1079
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 343
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5425
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Kelvin Benjamin",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 692
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Travis Benjamin",
      "PlayerPos": "WR",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 96
      }, {
        "Name": "Receptions",
        "GameStatValue": 34
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 567
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 257
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Arrelious Benn",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 12
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Martellus Bennett",
      "PlayerPos": "TE",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 286
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Michael Bennett",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 8.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 14
      }, {
        "Name": "QB Hit",
        "GameStatValue": 24
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 56.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Bene' Benwikere",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Nat Berhe",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 8
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Giovani Bernard",
      "PlayerPos": "RB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 458
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 43
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 389
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Eric Berry",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Brenton Bersin",
      "PlayerPos": "WR",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 128
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Antoine Bethea",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 51
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Justin Bethel",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 82
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Kapri Bibbs",
      "PlayerPos": "RB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 79
      }, {
        "Name": "Receptions",
        "GameStatValue": 14
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 128
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Vince Biegel",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Adam Bighill",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Andrew Billings",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Jace Billingsley",
      "PlayerPos": "WR",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Buffalo Bills",
      "PlayerPos": "DEF",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 18
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 16
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 853
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 347
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 3
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5682
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Angelo Blackson",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Ronald Blair",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Robert Blanton",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "LeGarrette Blount",
      "PlayerPos": "RB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 766
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 8
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 50
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Alfred Blue",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 262
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 54
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Briean Boddy-Calhoun",
      "PlayerPos": "DB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Brandon Bolden",
      "PlayerPos": "RB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 67
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Victor Bolden",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Devante Bond",
      "PlayerPos": "LB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Devontae Booker",
      "PlayerPos": "RB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 299
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 30
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 275
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 276
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Blake Bortles",
      "PlayerPos": "QB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 315
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 208
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3687
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 21
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 13
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 24
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 57
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 322
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 9
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -6
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Joey Bosa",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 12.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 21
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 66
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jon Bostic",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 40
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tre Boston",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 49
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Chris Boswell",
      "PlayerPos": "K",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 12
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 9
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Kendrick Bourne",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 257
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "A.J. Bouye",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 18
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 70
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "NaVorro Bowman",
      "PlayerPos": "LB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 47
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Tyus Bowser",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 27
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Tyler Boyd",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 225
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Nick Boyle",
      "PlayerPos": "TE",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 203
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "James Bradberry",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Sam Bradford",
      "PlayerPos": "QB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 32
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 11
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 382
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Nigel Bradham",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 27
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 37
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tom Brady",
      "PlayerPos": "QB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 385
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 196
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4577
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 32
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 8
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 35
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 25
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 28
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 7
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Alan Branch",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Andre Branch",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Tyvon Branch",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Caleb Brantley",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Cameron Brate",
      "PlayerPos": "TE",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 591
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Ben Braunecker",
      "PlayerPos": "TE",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Quan Bray",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 39
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 520
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Tyler Bray",
      "PlayerPos": "QB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -4
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Bashaud Breeland",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 37
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 19
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 96
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Drew Brees",
      "PlayerPos": "QB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 386
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 150
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4334
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 23
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 8
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 20
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 33
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -12
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matt Breida",
      "PlayerPos": "RB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 465
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 21
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 180
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 83
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Kentrell Brice",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Teddy Bridgewater",
      "PlayerPos": "QB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 2
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jacoby Brissett",
      "PlayerPos": "QB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 276
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 193
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3098
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 13
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 7
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 52
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 6
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 63
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 260
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -13
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kenny Britt",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 256
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Tramaine Brock",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Michael Brockers",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jay Bromley",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Denver Broncos",
      "PlayerPos": "DEF",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 8
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1119
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 354
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 8
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 4640
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Ahmad Brooks",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Kentrell Brothers",
      "PlayerPos": "LB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Anthony Brown",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Antonio Brown",
      "PlayerPos": "WR",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1533
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 7
      }, {
        "Name": "200+ Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 61
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Blair Brown",
      "PlayerPos": "LB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Daniel Brown",
      "PlayerPos": "TE",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 129
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jaron Brown",
      "PlayerPos": "WR",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 477
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jatavis Brown",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jayon Brown",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "John Brown",
      "PlayerPos": "WR",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 10
      }, {
        "Name": "Receptions",
        "GameStatValue": 21
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 299
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Mack Brown",
      "PlayerPos": "RB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 29
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 11
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Malcolm Brown",
      "PlayerPos": "RB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 246
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 9
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 53
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Blocked kick)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Malcom Brown",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Noah Brown",
      "PlayerPos": "WR",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 33
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Preston Brown",
      "PlayerPos": "LB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 60
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Zach Brown",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 43
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Cleveland Browns",
      "PlayerPos": "DEF",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 14
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1011
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 384
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 6
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5250
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 10
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Dez Bryant",
      "PlayerPos": "WR",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -4
      }, {
        "Name": "Receptions",
        "GameStatValue": 69
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 838
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Martavis Bryant",
      "PlayerPos": "WR",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 22
      }, {
        "Name": "Receptions",
        "GameStatValue": 50
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 603
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 151
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matt Bryant",
      "PlayerPos": "K",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 9
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 8
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Deone Bucannon",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 39
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tampa Bay Buccaneers",
      "PlayerPos": "DEF",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 13
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 13
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 18
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 624
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 376
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 6049
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "DeForest Buckner",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 22
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 21
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Jonathan Bullard",
      "PlayerPos": "DL",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Randy Bullock",
      "PlayerPos": "K",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Vontaze Burfict",
      "PlayerPos": "LB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 49
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "James Burgess",
      "PlayerPos": "LB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Rex Burkhead",
      "PlayerPos": "RB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 264
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 30
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 254
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Marcus Burley",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Morgan Burnett",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Artie Burns",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 13
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Juston Burris",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 48
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Trey Burton",
      "PlayerPos": "TE",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 248
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Deon Bush",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Rafael Bush",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Harrison Butker",
      "PlayerPos": "K",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "FG Made 20-29",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 16
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Adam Butler",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 20
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Brice Butler",
      "PlayerPos": "WR",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 317
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Darius Butler",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 32
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Malcolm Butler",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 12
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Vernon Butler",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kevin Byard",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 16
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 130
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Josh Bynes",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 25
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Damiere Byrd",
      "PlayerPos": "WR",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Receptions",
        "GameStatValue": 10
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 105
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 238
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jairus Byrd",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Travaris Cadet",
      "PlayerPos": "RB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 96
      }, {
        "Name": "Receptions",
        "GameStatValue": 16
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 119
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Shilique Calhoun",
      "PlayerPos": "LB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Bryce Callahan",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 20
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 73
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Joe Callahan",
      "PlayerPos": "QB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 5
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 2
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 11
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Michael Campanaro",
      "PlayerPos": "WR",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 42
      }, {
        "Name": "Receptions",
        "GameStatValue": 19
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 173
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 450
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Calais Campbell",
      "PlayerPos": "DL",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 14.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 14
      }, {
        "Name": "QB Hit",
        "GameStatValue": 30
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 96
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "De'Vondre Campbell",
      "PlayerPos": "LB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 31
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Ibraheim Campbell",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Maurice Canady",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Arizona Cardinals",
      "PlayerPos": "DEF",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 15
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 17
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 880
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 335
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 5
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 4975
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Don Carey",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Brandon Carr",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 12
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 57
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Derek Carr",
      "PlayerPos": "QB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 323
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 192
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3496
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 22
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 13
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 20
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 5
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 23
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 66
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 8
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Tank Carradine",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "T.J. Carrie",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Derek Carrier",
      "PlayerPos": "TE",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 71
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 41
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Nolan Carroll",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Leonte Carroo",
      "PlayerPos": "WR",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 69
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Chris Carson",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 208
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 59
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Bruce Carter",
      "PlayerPos": "LB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Chris Carter",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jurrell Casey",
      "PlayerPos": "DL",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 6
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 19
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 39
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Jonathan Casillas",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Matt Cassel",
      "PlayerPos": "QB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 25
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 17
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 162
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 2
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Chandler Catanzaro",
      "PlayerPos": "K",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 12
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Brent Celek",
      "PlayerPos": "TE",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 130
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Garrett Celek",
      "PlayerPos": "TE",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 336
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Kam Chancellor",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Los Angeles Chargers",
      "PlayerPos": "DEF",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 18
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 13
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 733
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 262
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5254
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jamaal Charles",
      "PlayerPos": "RB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 296
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 129
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Taco Charlton",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Jehu Chesson",
      "PlayerPos": "WR",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 18
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 65
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Anthony Chickillo",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Blocked kick)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 25
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kansas City Chiefs",
      "PlayerPos": "DEF",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 16
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 12
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1271
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 331
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 7
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5842
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 10
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Marqui Christian",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Patrick Chung",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 71
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 30
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Barry Church",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 51
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8.5
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Morris Claiborne",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 28
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Chuck Clark",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Frank Clark",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 9
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 21
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 73.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Kenny Clark",
      "PlayerPos": "DL",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 26.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Michael Clark",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 41
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Will Clarke",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Charles Clay",
      "PlayerPos": "TE",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 558
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Kaelin Clay",
      "PlayerPos": "WR",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 27
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 85
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 201
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Adrian Clayborn",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 9.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 61.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Kellen Clemens",
      "PlayerPos": "QB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 6
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 2
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 36
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -5
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Corey Clement",
      "PlayerPos": "RB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 321
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 10
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 123
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 49
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Ha Ha Clinton-Dix",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jadeveon Clowney",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Sack",
        "GameStatValue": 9.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 71
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 21
      }, {
        "Name": "QB Hit",
        "GameStatValue": 21
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 67
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Sammie Coates",
      "PlayerPos": "WR",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 70
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Randall Cobb",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 1
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 10
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 9
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 17
      }, {
        "Name": "Receptions",
        "GameStatValue": 66
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 653
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Ross Cockrell",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tarik Cohen",
      "PlayerPos": "RB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 1
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 21
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 87
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 370
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 53
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 353
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 855
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Adrian Colbert",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Dylan Cole",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 28
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Keelan Cole",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 748
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 26
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Brandon Coleman",
      "PlayerPos": "WR",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 364
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Corey Coleman",
      "PlayerPos": "WR",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 305
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kurt Coleman",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Tevin Coleman",
      "PlayerPos": "RB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 628
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 27
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 299
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Stacy Coley",
      "PlayerPos": "WR",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Alex Collins",
      "PlayerPos": "RB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 973
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 187
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 50
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jamie Collins",
      "PlayerPos": "LB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Landon Collins",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 26
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 33
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Maliek Collins",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Indianapolis Colts",
      "PlayerPos": "DEF",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 13
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 11
      }, {
        "Name": "Safeties",
        "GameStatValue": 2
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 752
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 366
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5873
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Aaron Colvin",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Def 2-point Return",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Will Compton",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Chris Conley",
      "PlayerPos": "WR",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 175
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Gareon Conley",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "James Conner",
      "PlayerPos": "RB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 144
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Chris Conte",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Dalvin Cook",
      "PlayerPos": "RB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 354
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 11
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 90
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jared Cook",
      "PlayerPos": "TE",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 688
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Brandin Cooks",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 40
      }, {
        "Name": "Receptions",
        "GameStatValue": 65
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1082
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Travis Coons",
      "PlayerPos": "K",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Amari Cooper",
      "PlayerPos": "WR",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 48
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 680
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "200+ Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Marcus Cooper",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 17
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Pharoh Cooper",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 11
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 84
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1331
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Xavier Cooper",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Cody Core",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Kamalei Correa",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Blake Countess",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Blocked kick)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 19
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kirk Cousins",
      "PlayerPos": "QB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 347
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 193
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4093
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 27
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 13
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 41
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 49
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 179
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 5
      }, {
        "Name": "Fumble",
        "GameStatValue": 13
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -52
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Christian Covington",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Dallas Cowboys",
      "PlayerPos": "DEF",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 20
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 895
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 302
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5089
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Fletcher Cox",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 40.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Brock Coyle",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 26
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 0.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Michael Crabtree",
      "PlayerPos": "WR",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 618
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Jack Crawford",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Tyrone Crawford",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 27
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Ken Crawley",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 17
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Mason Crosby",
      "PlayerPos": "K",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Alan Cross",
      "PlayerPos": "RB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 58
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jamison Crowder",
      "PlayerPos": "WR",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 34
      }, {
        "Name": "Receptions",
        "GameStatValue": 66
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 789
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 171
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 6
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Isaiah Crowell",
      "PlayerPos": "RB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 853
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 28
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 182
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jeff Cumberland",
      "PlayerPos": "TE",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Benny Cunningham",
      "PlayerPos": "RB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 29
      }, {
        "Name": "Receptions",
        "GameStatValue": 20
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 240
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 147
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 10
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Zach Cunningham",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 42
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7.5
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Vinny Curry",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 25
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Brian Cushing",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jay Cutler",
      "PlayerPos": "QB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 266
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 163
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2666
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 19
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 14
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 20
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 19
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 32
      }, {
        "Name": "Fumble",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 6
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -5
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Johnathan Cyprien",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Andy Dalton",
      "PlayerPos": "QB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 297
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 199
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3320
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 25
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 12
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 39
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 38
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 99
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 4
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -4
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Chase Daniel",
      "PlayerPos": "QB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "LeShun Daniels",
      "PlayerPos": "RB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mike Daniels",
      "PlayerPos": "DL",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 42
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Karlos Dansby",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Amara Darboh",
      "PlayerPos": "WR",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 71
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Ronald Darby",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 42
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Marcell Dareus",
      "PlayerPos": "DL",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Orleans Darkwa",
      "PlayerPos": "RB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 751
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 19
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 116
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Lavonte David",
      "PlayerPos": "LB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 5
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Austin Davis",
      "PlayerPos": "QB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Carl Davis",
      "PlayerPos": "DL",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Cody Davis",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Corey Davis",
      "PlayerPos": "WR",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 375
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Demario Davis",
      "PlayerPos": "LB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 38
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 13
      }, {
        "Name": "QB Hit",
        "GameStatValue": 15
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 21.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jarrad Davis",
      "PlayerPos": "LB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 31
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Justin Davis",
      "PlayerPos": "RB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Michael Davis",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Mike Davis",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 240
      }, {
        "Name": "Receptions",
        "GameStatValue": 15
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 131
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Ryan Davis",
      "PlayerPos": "LB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Sean Davis",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 76
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Thomas Davis",
      "PlayerPos": "LB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 17.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Todd Davis",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 34
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Trevor Davis",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 70
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 996
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Vernon Davis",
      "PlayerPos": "TE",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 648
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Vontae Davis",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Tyeler Davison",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "P.J. Dawson",
      "PlayerPos": "LB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Phil Dawson",
      "PlayerPos": "K",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Sheldon Day",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Matt Dayes",
      "PlayerPos": "RB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 29
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 437
      }, {
        "Name": "Tackle",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Eric Decker",
      "PlayerPos": "WR",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 54
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 563
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Treston Decoud",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Quintin Demps",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Darqueze Dennard",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 61
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 109
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "A.J. Derby",
      "PlayerPos": "TE",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 244
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Seth DeValve",
      "PlayerPos": "TE",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 395
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "James Develin",
      "PlayerPos": "RB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 38
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Quinton Dial",
      "PlayerPos": "DL",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Ed Dickson",
      "PlayerPos": "TE",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 437
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Quandre Diggs",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 28
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Stefon Diggs",
      "PlayerPos": "WR",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receptions",
        "GameStatValue": 64
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 849
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Patrick DiMarco",
      "PlayerPos": "RB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 28
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 24
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Josh Doctson",
      "PlayerPos": "WR",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -14
      }, {
        "Name": "Receptions",
        "GameStatValue": 35
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 502
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Kevin Dodd",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Miami Dolphins",
      "PlayerPos": "DEF",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 9
      }, {
        "Name": "Safeties",
        "GameStatValue": 2
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1098
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 370
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5371
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Dylan Donahue",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Aaron Donald",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 11
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 27
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 95
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Phillip Dorsett",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 7
      }, {
        "Name": "Receptions",
        "GameStatValue": 12
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 194
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Harry Douglas",
      "PlayerPos": "WR",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Rasul Douglas",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Leger Douzable",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jack Doyle",
      "PlayerPos": "TE",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 690
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kenyan Drake",
      "PlayerPos": "RB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 644
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 32
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 239
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 147
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Kurtis Drummond",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Elvis Dumervil",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 6.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 46.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Lance Dunbar",
      "PlayerPos": "RB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 51
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Quinton Dunbar",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Carlos Dunlap",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 7.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 24
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 41
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Bud Dupree",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 56
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Justin Durant",
      "PlayerPos": "LB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Ed Eagan",
      "PlayerPos": "WR",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Philadelphia Eagles",
      "PlayerPos": "DEF",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 19
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 14
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 5
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 613
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 283
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 4904
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Kony Ealy",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Nate Ebner",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Eric Ebron",
      "PlayerPos": "TE",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 574
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Samson Ebukam",
      "PlayerPos": "LB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 21
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Kasim Edebali",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Trey Edmunds",
      "PlayerPos": "RB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 48
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 65
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Lavar Edwards",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Mario Edwards",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Tyler Eifert",
      "PlayerPos": "TE",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 46
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Austin Ekeler",
      "PlayerPos": "RB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 260
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 27
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 279
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 85
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 15
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Ukeme Eligwe",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Dannell Ellerbe",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Andre Ellington",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 55
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 39
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 369
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Bruce Ellington",
      "PlayerPos": "WR",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 17
      }, {
        "Name": "Receptions",
        "GameStatValue": 29
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 330
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 47
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Ezekiel Elliott",
      "PlayerPos": "RB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 983
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 26
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 269
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jake Elliott",
      "PlayerPos": "K",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 12
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 5
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Justin Ellis",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 0.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Rhett Ellison",
      "PlayerPos": "TE",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 235
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Trae Elston",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Kyle Emanuel",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Evan Engram",
      "PlayerPos": "TE",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Receptions",
        "GameStatValue": 64
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 722
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Alex Erickson",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 16
      }, {
        "Name": "Receptions",
        "GameStatValue": 12
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 180
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 941
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 6
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Zach Ertz",
      "PlayerPos": "TE",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 824
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Tyler Ervin",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Receptions",
        "GameStatValue": 8
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 38
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 153
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jordan Evans",
      "PlayerPos": "LB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Justin Evans",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 28
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Marwin Evans",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Mike Evans",
      "PlayerPos": "WR",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1001
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Deshazor Everett",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Gerald Everett",
      "PlayerPos": "TE",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receptions",
        "GameStatValue": 16
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 244
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Antone Exum",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Kyler Fackrell",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 22
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Ka'imi Fairbairn",
      "PlayerPos": "K",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 20-29",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Atlanta Falcons",
      "PlayerPos": "DEF",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 12
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1069
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 303
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 9
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5094
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 10
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "David Fales",
      "PlayerPos": "QB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 29
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 14
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 265
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 8
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matthias Farley",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 38
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Anthony Fasano",
      "PlayerPos": "TE",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 107
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Terrence Fede",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Clayton Fejedelem",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Darren Fells",
      "PlayerPos": "TE",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 177
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Josh Ferguson",
      "PlayerPos": "RB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 3
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 16
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 86
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Sam Ficken",
      "PlayerPos": "K",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "C.J. Fiedorowicz",
      "PlayerPos": "TE",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 127
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Larry Fitzgerald",
      "PlayerPos": "WR",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 1
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 21
      }, {
        "Name": "Receptions",
        "GameStatValue": 109
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1156
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Ryan Fitzpatrick",
      "PlayerPos": "QB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 96
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 67
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1103
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 3
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 7
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 15
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 78
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Joe Flacco",
      "PlayerPos": "QB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 352
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 197
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3141
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 18
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 13
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 27
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 25
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 54
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 6
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -3
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Coby Fleener",
      "PlayerPos": "TE",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 295
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Marquis Flowers",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Trey Flowers",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 6.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 25
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 29.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Leonard Floyd",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 36
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Michael Floyd",
      "PlayerPos": "WR",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 78
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Nick Foles",
      "PlayerPos": "QB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 57
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 44
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 537
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 2
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 11
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -8
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Nick Folk",
      "PlayerPos": "K",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kai Forbath",
      "PlayerPos": "K",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 12
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 6
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Dee Ford",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 16
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Rudy Ford",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "D'Onta Foreman",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 327
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 83
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Matt Forte",
      "PlayerPos": "RB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 381
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 37
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 293
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "D.J. Foster",
      "PlayerPos": "RB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 19
      }, {
        "Name": "Receptions",
        "GameStatValue": 17
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 133
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 184
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Mason Foster",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Reuben Foster",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Leonard Fournette",
      "PlayerPos": "RB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1040
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 36
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 302
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Bennie Fowler",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 350
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Dante Fowler",
      "PlayerPos": "DL",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 53
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 49
      }, {
        "Name": "50+ Yard Fumble Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jalston Fowler",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kavon Frazier",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Devonta Freeman",
      "PlayerPos": "RB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 865
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 36
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 317
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Jerrell Freeman",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Dwight Freeney",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 31
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jonathan Freeny",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kendall Fuller",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 43
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kyle Fuller",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 22
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Will Fuller",
      "PlayerPos": "WR",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 9
      }, {
        "Name": "Receptions",
        "GameStatValue": 28
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 423
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 135
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Devin Funchess",
      "PlayerPos": "WR",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 840
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Blaine Gabbert",
      "PlayerPos": "QB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 95
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 76
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1086
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 6
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 23
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 22
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 82
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 7
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Taylor Gabriel",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 49
      }, {
        "Name": "Receptions",
        "GameStatValue": 33
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 378
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Andrew Gachkar",
      "PlayerPos": "LB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "E.J. Gaines",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Phillip Gaines",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Junior Galette",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 14
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 27
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Wayne Gallman",
      "PlayerPos": "RB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 476
      }, {
        "Name": "Receptions",
        "GameStatValue": 34
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 193
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Graham Gano",
      "PlayerPos": "K",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 10
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Pierre Garcon",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 500
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jimmy Garoppolo",
      "PlayerPos": "QB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 120
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 58
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1560
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 8
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 15
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 11
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": -6
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Myles Garrett",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 44
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Antonio Gates",
      "PlayerPos": "TE",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 316
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "William Gay",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Clayton Geathers",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Ben Gedeon",
      "PlayerPos": "LB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Tanner Gentry",
      "PlayerPos": "WR",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 35
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Jeremiah George",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Nate Gerry",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "William Gholston",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "New York Giants",
      "PlayerPos": "DEF",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 13
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 12
      }, {
        "Name": "Safeties",
        "GameStatValue": 1
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 757
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 382
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5971
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Shelton Gibson",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 11
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Marcus Gilchrist",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Mike Gillislee",
      "PlayerPos": "RB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 383
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 15
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Stephon Gilmore",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 59
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Ted Ginn",
      "PlayerPos": "WR",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 39
      }, {
        "Name": "Receptions",
        "GameStatValue": 53
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 787
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 159
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tashaun Gipson",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 83
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Adarius Glanton",
      "PlayerPos": "LB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Ryan Glasgow",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Mike Glennon",
      "PlayerPos": "QB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 93
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 47
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 833
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 8
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Davon Godchaux",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Chris Godwin",
      "PlayerPos": "WR",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 525
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jared Goff",
      "PlayerPos": "QB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 296
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 181
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3804
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 28
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 7
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 25
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 5
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 28
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 51
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Brittan Golden",
      "PlayerPos": "WR",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 70
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 144
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Markus Golden",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Robert Golden",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 1
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 44
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 13
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Eddie Goldman",
      "PlayerPos": "DL",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Kenny Golladay",
      "PlayerPos": "WR",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 9
      }, {
        "Name": "Receptions",
        "GameStatValue": 28
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 477
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Zane Gonzalez",
      "PlayerPos": "K",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Najee Goode",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "B.J. Goodson",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Marquise Goodwin",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 44
      }, {
        "Name": "Receptions",
        "GameStatValue": 56
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 962
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Josh Gordon",
      "PlayerPos": "WR",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 335
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Melvin Gordon",
      "PlayerPos": "RB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1105
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 58
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 476
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Frank Gore",
      "PlayerPos": "RB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 961
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 29
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 245
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Stephen Gostkowski",
      "PlayerPos": "K",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 16
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 9
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Adam Gotsis",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Robbie Gould",
      "PlayerPos": "K",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 17
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 20-29",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Brandon Graham",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 9.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 14
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 67.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Corey Graham",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 73
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jimmy Graham",
      "PlayerPos": "TE",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 520
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 10
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Corey Grant",
      "PlayerPos": "RB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 248
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 3
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 41
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 479
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Curtis Grant",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jakeem Grant",
      "PlayerPos": "WR",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Receptions",
        "GameStatValue": 13
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 203
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 669
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -13
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Ryan Grant",
      "PlayerPos": "WR",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 573
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "MarQueis Gray",
      "PlayerPos": "TE",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "A.J. Green",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1078
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "T.J. Green",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tion Green",
      "PlayerPos": "RB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 165
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Virgil Green",
      "PlayerPos": "TE",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 191
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jermaine Gresham",
      "PlayerPos": "TE",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 322
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Everson Griffen",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 13
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 25
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 76
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Garrett Griffin",
      "PlayerPos": "TE",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 4
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Ryan Griffin",
      "PlayerPos": "TE",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 158
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Shaquill Griffin",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 15
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Nicholas Grigsby",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Xavier Grimble",
      "PlayerPos": "TE",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 32
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Brent Grimes",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 67
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 37
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Geneo Grissom",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Rob Gronkowski",
      "PlayerPos": "TE",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1084
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Kamu Grugier-Hill",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Rodney Gunter",
      "PlayerPos": "DL",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Todd Gurley",
      "PlayerPos": "RB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1305
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 13
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 64
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 788
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Lawrence Guy",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Obum Gwacham",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Joe Haden",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Bryce Hager",
      "PlayerPos": "LB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Nate Hairston",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Andre Hal",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Tamba Hali",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "DeAngelo Hall",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 11
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Marvin Hall",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 60
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "C.J. Ham",
      "PlayerPos": "RB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 68
      }, {
        "Name": "Tackle",
        "GameStatValue": 9
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Antonio Hamilton",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Cobi Hamilton",
      "PlayerPos": "WR",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Johnathan Hankins",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "James Hanna",
      "PlayerPos": "TE",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 88
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Chad Hansen",
      "PlayerPos": "WR",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 94
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Justin Hardy",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 221
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Javon Hargrave",
      "PlayerPos": "DL",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 16
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Vernon Hargreaves",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Duron Harmon",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Eli Harold",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Anthony Harris",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Charles Harris",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Chris Harris",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 36
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "David Harris",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "De'Vante Harris",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Demetrius Harris",
      "PlayerPos": "TE",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 224
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Dwayne Harris",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Maurice Harris",
      "PlayerPos": "WR",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 62
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 71
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Shelby Harris",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 33
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Damon Harrison",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "James Harrison",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Stephen Hauschka",
      "PlayerPos": "K",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 9
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 7
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Josh Hawkins",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "D.J. Hayden",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 27
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "William Hayes",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Casey Hayward",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 22
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 11
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Matt Hazel",
      "PlayerPos": "WR",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jeff Heath",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 63
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Joel Heath",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Ben Heeney",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "De'Angelo Henderson",
      "PlayerPos": "RB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 36
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 59
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Trey Hendrickson",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Chad Henne",
      "PlayerPos": "QB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Derrick Henry",
      "PlayerPos": "RB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 744
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 11
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 136
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Hunter Henry",
      "PlayerPos": "TE",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 579
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Willie Henry",
      "PlayerPos": "DL",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 23
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Treyvon Hester",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jeff Heuerman",
      "PlayerPos": "TE",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 142
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Neville Hewitt",
      "PlayerPos": "LB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Ryan Hewitt",
      "PlayerPos": "TE",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 22
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Cameron Heyward",
      "PlayerPos": "DL",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 12
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 16
      }, {
        "Name": "QB Hit",
        "GameStatValue": 22
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 71
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Darrius Heyward-Bey",
      "PlayerPos": "WR",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 32
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 47
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Akiem Hicks",
      "PlayerPos": "DL",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 8.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 20
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 57
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jordan Hicks",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Tyler Higbee",
      "PlayerPos": "TE",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 295
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Rashard Higgins",
      "PlayerPos": "WR",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 27
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 312
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Dont'a Hightower",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 19
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Brian Hill",
      "PlayerPos": "RB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 37
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 36
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Delano Hill",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Jeremy Hill",
      "PlayerPos": "RB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 116
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 16
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Josh Hill",
      "PlayerPos": "TE",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -8
      }, {
        "Name": "Receptions",
        "GameStatValue": 16
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 125
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Taysom Hill",
      "PlayerPos": "QB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Troy Hill",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Tyreek Hill",
      "PlayerPos": "WR",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 17
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 59
      }, {
        "Name": "Receptions",
        "GameStatValue": 75
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1183
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 6
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 204
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mike Hilton",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 45
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 34
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "T.Y. Hilton",
      "PlayerPos": "WR",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 966
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Anthony Hitchens",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 29
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Gerald Hodges",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Chris Hogan",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 17
      }, {
        "Name": "Receptions",
        "GameStatValue": 34
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 439
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Kevin Hogan",
      "PlayerPos": "QB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 46
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 29
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 517
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 6
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 10
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 71
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Krishawn Hogan",
      "PlayerPos": "WR",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mack Hollins",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 226
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -16
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jacob Hollister",
      "PlayerPos": "TE",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 42
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Andre Holmes",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 120
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Tyrone Holmes",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Johnny Holton",
      "PlayerPos": "WR",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 218
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Ziggy Hood",
      "PlayerPos": "DL",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Malik Hooker",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 73
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Michael Hoomanawanui",
      "PlayerPos": "TE",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 52
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Austin Hooper",
      "PlayerPos": "TE",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 526
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "DeAndre Hopkins",
      "PlayerPos": "WR",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1378
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 13
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "200+ Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Dustin Hopkins",
      "PlayerPos": "K",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Wes Horton",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 35.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Davon House",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Justin Houston",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 9.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 13
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 16
      }, {
        "Name": "QB Hit",
        "GameStatValue": 20
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 54
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Lamarr Houston",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 34
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 45
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "DeAndre Houston-Carson",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jordan Howard",
      "PlayerPos": "RB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1122
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 125
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "O.J. Howard",
      "PlayerPos": "TE",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 432
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Xavien Howard",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 13
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 71
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Brian Hoyer",
      "PlayerPos": "QB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 123
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 88
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1287
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 4
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 16
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 9
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -9
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jerry Hughes",
      "PlayerPos": "DL",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 24
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "John Hughes",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mike Hull",
      "PlayerPos": "LB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Ramon Humber",
      "PlayerPos": "LB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 29
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Marlon Humphrey",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 33
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Adam Humphries",
      "PlayerPos": "WR",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 61
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 631
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 49
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Brett Hundley",
      "PlayerPos": "QB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 192
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 124
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1836
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 12
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 29
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 36
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 270
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Akeem Hunt",
      "PlayerPos": "RB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 23
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 31
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 611
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kareem Hunt",
      "PlayerPos": "RB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1327
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 53
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 455
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Margus Hunt",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Danielle Hunter",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Sack",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 56
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Justin Hunter",
      "PlayerPos": "WR",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Allen Hurns",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 484
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Carlos Hyde",
      "PlayerPos": "RB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 938
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 59
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 350
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Micah Hyde",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 65
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 13
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 64
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "George Iloka",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 14
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Mark Ingram",
      "PlayerPos": "RB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1124
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 12
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 58
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 416
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Melvin Ingram",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 10.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 39
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 17
      }, {
        "Name": "QB Hit",
        "GameStatValue": 25
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 87.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Dontrelle Inman",
      "PlayerPos": "WR",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 343
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Matthew Ioannidis",
      "PlayerPos": "DL",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 33.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Bruce Irvin",
      "PlayerPos": "LB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 14
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 30.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "David Irving",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 51
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kemal Ishmael",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Chris Ivory",
      "PlayerPos": "RB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 382
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 21
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 175
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Myles Jack",
      "PlayerPos": "LB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 81
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard Fumble Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Adoree' Jackson",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 55
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 868
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 61
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 17
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "DeSean Jackson",
      "PlayerPos": "WR",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 38
      }, {
        "Name": "Receptions",
        "GameStatValue": 50
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 668
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Eddie Jackson",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 55
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 82
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 75
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard Fumble Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kareem Jackson",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Malik Jackson",
      "PlayerPos": "DL",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 64
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "William Jackson",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 21
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 14
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 75
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jacksonville Jaguars",
      "PlayerPos": "DEF",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 21
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 17
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 876
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 262
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 7
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 4578
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Team Def 2-point Return",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Cory James",
      "PlayerPos": "LB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jesse James",
      "PlayerPos": "TE",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 372
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Jeff Janis",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 12
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 43
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Andy Janovich",
      "PlayerPos": "RB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 35
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Grady Jarrett",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 33
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Ricky Jean Francois",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Quinton Jefferson",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tony Jefferson",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 13
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Alshon Jeffery",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 789
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Janoris Jenkins",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 113
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jarvis Jenkins",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Jelani Jenkins",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "John Jenkins",
      "PlayerPos": "DL",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jordan Jenkins",
      "PlayerPos": "LB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 32
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 16
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Malcolm Jenkins",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 63
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Rayshawn Jenkins",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Timmy Jernigan",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 17
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Lorenzo Jerome",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "New York Jets",
      "PlayerPos": "DEF",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 9
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 854
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 368
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5636
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Anthony Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Austin Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Charles Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Chris Johnson",
      "PlayerPos": "RB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 114
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 43
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "David Johnson",
      "PlayerPos": "RB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 23
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 67
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Derrick Johnson",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Duke Johnson",
      "PlayerPos": "RB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 348
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 74
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 693
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "George Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Isaiah Johnson",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Jaleel Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "John Johnson",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 69
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kevin Johnson",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Leonard Johnson",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Marcus Johnson",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 45
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Michael Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 36
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Steven Johnson",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tom Johnson",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Trumaine Johnson",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 57
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 14
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 39
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Aaron Jones",
      "PlayerPos": "RB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 448
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 9
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Adam Jones",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 19
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Andy Jones",
      "PlayerPos": "WR",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Byron Jones",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Chandler Jones",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 17
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 28
      }, {
        "Name": "QB Hit",
        "GameStatValue": 33
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 113
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Chris Jones",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 6.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": -3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 42
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Christian Jones",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 30
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "D.J. Jones",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "DaQuan Jones",
      "PlayerPos": "DL",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 20
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Datone Jones",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Deion Jones",
      "PlayerPos": "LB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 47
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 42
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Howard Jones",
      "PlayerPos": "DL",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jonathan Jones",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Josh Jones",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Julio Jones",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 15
      }, {
        "Name": "Receptions",
        "GameStatValue": 88
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1444
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "200+ Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Landry Jones",
      "PlayerPos": "QB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 23
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 5
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 239
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 8
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -10
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Marvin Jones",
      "PlayerPos": "WR",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 1101
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Matt Jones",
      "PlayerPos": "RB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Nazair Jones",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 24
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Reshad Jones",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 28
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 15
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 52
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Sidney Jones",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "T.J. Jones",
      "PlayerPos": "WR",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 399
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 152
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Taiwan Jones",
      "PlayerPos": "RB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 11
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 50
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Zay Jones",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 316
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Cameron Jordan",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 17
      }, {
        "Name": "QB Hit",
        "GameStatValue": 28
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 93.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 3
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Dion Jordan",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 20
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Johnathan Joseph",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 85
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Karl Joseph",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": -1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Linval Joseph",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 28
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 23.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Lamarcus Joyner",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 104
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matt Judon",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 17
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 70
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Kyle Juszczyk",
      "PlayerPos": "RB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 31
      }, {
        "Name": "Receptions",
        "GameStatValue": 33
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 315
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Ufomba Kamalu",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Alvin Kamara",
      "PlayerPos": "RB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 728
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 81
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 826
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 347
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Bronson Kaufusi",
      "PlayerPos": "DL",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Damontae Kazee",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Jayron Kearse",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jermaine Kearse",
      "PlayerPos": "WR",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 810
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Case Keenum",
      "PlayerPos": "QB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 325
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 156
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3547
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 22
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 7
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 22
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 40
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 160
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Travis Kelce",
      "PlayerPos": "TE",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 7
      }, {
        "Name": "Receptions",
        "GameStatValue": 83
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1038
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Rob Kelley",
      "PlayerPos": "RB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 194
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 18
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Eric Kendricks",
      "PlayerPos": "LB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 46
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 31
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Lance Kendricks",
      "PlayerPos": "TE",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 203
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Mychal Kendricks",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Devon Kennard",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 24
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Jeremy Kerley",
      "PlayerPos": "WR",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 217
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 85
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Zach Kerr",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Ryan Kerrigan",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 24
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 73.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Cody Kessler",
      "PlayerPos": "QB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 11
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 12
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 126
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 6
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Hau'oli Kikaha",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 24
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Miles Killebrew",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 35
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Derrick Kindred",
      "PlayerPos": "DB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 30
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "David King",
      "PlayerPos": "DL",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Deon King",
      "PlayerPos": "LB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Desmond King",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 66
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 90
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Kevin King",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Tavarres King",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 18
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 240
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Dre Kirkpatrick",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 47
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 14
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 101
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Christian Kirksey",
      "PlayerPos": "LB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 52
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "George Kittle",
      "PlayerPos": "TE",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 515
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "DeShone Kizer",
      "PlayerPos": "QB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 255
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 221
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2894
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 11
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 22
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 38
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 77
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 419
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 6
      }, {
        "Name": "Fumble",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -11
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "A.J. Klein",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 21
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Karl Klug",
      "PlayerPos": "DL",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Younghoe Koo",
      "PlayerPos": "K",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "FG Made 20-29",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Ben Koyack",
      "PlayerPos": "TE",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 38
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tanoh Kpassagnon",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 17
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Tyler Kroft",
      "PlayerPos": "TE",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 404
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Luke Kuechly",
      "PlayerPos": "LB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 51
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 34
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "John Kuhn",
      "PlayerPos": "RB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Cooper Kupp",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 62
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 869
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Nick Kwiatkoski",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 16
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Eddie Lacy",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 179
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 47
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Brandon LaFell",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 548
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Josh Lambo",
      "PlayerPos": "K",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Emmanuel Lamur",
      "PlayerPos": "LB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jarvis Landry",
      "PlayerPos": "WR",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -7
      }, {
        "Name": "Receptions",
        "GameStatValue": 112
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 987
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 76
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Jeremy Lane",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Harvey Langi",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Brendan Langley",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Anthony Lanier",
      "PlayerPos": "DL",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 29
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Daniel Lasco",
      "PlayerPos": "RB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Darius Latham",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Cody Latimer",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 287
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 190
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Marshon Lattimore",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 18
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 85
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Demarcus Lawrence",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 22
      }, {
        "Name": "Sack",
        "GameStatValue": 15
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 26
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 163
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Carl Lawson",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 20
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 51
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Nevin Lawson",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 44
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Shaq Lawson",
      "PlayerPos": "DL",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Cre'von LeBlanc",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jeremiah Ledbetter",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Darron Lee",
      "PlayerPos": "LB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 27
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 19
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Elijah Lee",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Eric Lee",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Marqise Lee",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 17
      }, {
        "Name": "Receptions",
        "GameStatValue": 56
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 702
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 13
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Marquel Lee",
      "PlayerPos": "LB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Sean Lee",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 31
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 13
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Jordan Leslie",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 26
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Anthony Levine",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 21
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Dion Lewis",
      "PlayerPos": "RB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 896
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 32
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 214
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 570
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jourdan Lewis",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 25
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Marcedes Lewis",
      "PlayerPos": "TE",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 318
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Roger Lewis",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 416
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Tommylee Lewis",
      "PlayerPos": "WR",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Receptions",
        "GameStatValue": 10
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 116
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 422
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Zach Line",
      "PlayerPos": "RB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 28
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 8
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Detroit Lions",
      "PlayerPos": "DEF",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 19
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 13
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 16
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1100
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 346
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5692
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 9
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Cory Littleton",
      "PlayerPos": "LB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Corey Liuget",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tyler Lockett",
      "PlayerPos": "WR",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 58
      }, {
        "Name": "Receptions",
        "GameStatValue": 45
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 555
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1186
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Bennie Logan",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Chris Long",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Matt Longacre",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 25
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Star Lotulelei",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Ricardo Louis",
      "PlayerPos": "WR",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 357
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Kyle Love",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 26.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Dean Lowry",
      "PlayerPos": "DL",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 62
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 24
      }, {
        "Name": "50+ Yard Fumble Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Shalom Luani",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Jordan Lucas",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Wil Lutz",
      "PlayerPos": "K",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "PAT Made",
        "GameStatValue": 47
      }, {
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 13
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Aaron Lynch",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Marshawn Lynch",
      "PlayerPos": "RB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 891
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 20
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 151
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Paxton Lynch",
      "PlayerPos": "QB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 30
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 15
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 295
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 3
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 9
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 30
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Khalil Mack",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 10.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 15
      }, {
        "Name": "QB Hit",
        "GameStatValue": 22
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 75.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Marlon Mack",
      "PlayerPos": "RB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 358
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 21
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 225
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 69
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Jeremy Maclin",
      "PlayerPos": "WR",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 440
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tre Madden",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 65
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Patrick Mahomes",
      "PlayerPos": "QB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 22
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 13
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 284
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 7
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Ryan Mallett",
      "PlayerPos": "QB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 9
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 7
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 56
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Josh Malone",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 63
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Chris Manhertz",
      "PlayerPos": "TE",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 17
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Eli Manning",
      "PlayerPos": "QB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 352
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 219
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3468
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 19
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 13
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 31
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 12
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 26
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 5
      }, {
        "Name": "Fumble",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -5
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Sean Mannion",
      "PlayerPos": "QB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 22
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 15
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 185
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 9
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "EJ Manuel",
      "PlayerPos": "QB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 24
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 19
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 265
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 4
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Chris Maragos",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Justin March-Lillard",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Marcus Mariota",
      "PlayerPos": "QB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 281
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 172
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3232
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 13
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 15
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 27
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 60
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 312
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -7
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Cassius Marsh",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 27
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Brandon Marshall",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 31
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 19
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 18
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 154
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Byron Marshall",
      "PlayerPos": "RB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 32
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 36
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 89
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Doug Martin",
      "PlayerPos": "RB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 406
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 9
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 84
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Kareem Martin",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Blake Martinez",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 48
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Freddie Martino",
      "PlayerPos": "WR",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 96
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Tyler Matakevich",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tyrann Mathieu",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 16
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Chris Matthews",
      "PlayerPos": "WR",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 25
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Clay Matthews",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 28
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 8.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 63
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 22
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 61
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jordan Matthews",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 282
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Rishard Matthews",
      "PlayerPos": "WR",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -3
      }, {
        "Name": "Receptions",
        "GameStatValue": 53
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 795
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Rey Maualuga",
      "PlayerPos": "LB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Josh Mauro",
      "PlayerPos": "DL",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Michael Mauti",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Byron Maxwell",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Marcus Maye",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 22
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 44
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Vince Mayle",
      "PlayerPos": "WR",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 43
      }, {
        "Name": "Tackle",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "David Mayo",
      "PlayerPos": "LB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 8
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Benson Mayowa",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Devante Mays",
      "PlayerPos": "RB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tre McBride",
      "PlayerPos": "WR",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 144
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Christian McCaffrey",
      "PlayerPos": "RB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 435
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 80
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 651
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 220
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Max McCaffrey",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Bobby McCain",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Brice McCain",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Chris McCain",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 30
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "AJ McCarron",
      "PlayerPos": "QB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 7
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 7
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 66
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Terrell McClain",
      "PlayerPos": "DL",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Dexter McCoil",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Devin McCourty",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 80
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jason McCourty",
      "PlayerPos": "DB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 14
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 59
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Josh McCown",
      "PlayerPos": "QB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 267
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 130
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2926
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 18
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 9
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 39
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 37
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 124
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 4
      }, {
        "Name": "Fumble",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 6
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -8
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Gerald McCoy",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 13
      }, {
        "Name": "QB Hit",
        "GameStatValue": 23
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 34
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "LeSean McCoy",
      "PlayerPos": "RB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1138
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 59
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 448
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Dan McCullers",
      "PlayerPos": "DL",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Tony McDaniel",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Clinton McDonald",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 30
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Dexter McDonald",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "T.J. McDonald",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Vance McDonald",
      "PlayerPos": "TE",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 188
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Bradley McDougald",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Tanner McEvoy",
      "PlayerPos": "WR",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 113
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Darren McFadden",
      "PlayerPos": "RB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Stacy McGee",
      "PlayerPos": "DL",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Sean McGrath",
      "PlayerPos": "TE",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 46
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Elijah McGuire",
      "PlayerPos": "RB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 315
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 17
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 177
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 93
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Isaiah McKenzie",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 29
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 233
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 6
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Takkarist McKinley",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 6
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 42
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Benardrick McKinney",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 33
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jerick McKinnon",
      "PlayerPos": "RB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 570
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 51
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 421
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 312
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "J.D. McKissic",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 187
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 34
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 266
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Steve McLendon",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Rodney McLeod",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 67
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Sherrick McManis",
      "PlayerPos": "DB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Brandon McManus",
      "PlayerPos": "K",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 20-29",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Jeremy McNichols",
      "PlayerPos": "RB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Pernell McPhee",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 20
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Leon McQuay III",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Steven Means",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Brandon Mebane",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Obi Melifonwu",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Rashaan Melvin",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Whitney Mercilus",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jaydon Mickens",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 66
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 51
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Brian Mihalik",
      "PlayerPos": "OT",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": -4
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Matt Milano",
      "PlayerPos": "LB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 15
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 40
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Braxton Miller",
      "PlayerPos": "WR",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 19
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 162
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Lamar Miller",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 888
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 36
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 327
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Roy Miller",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Von Miller",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 10
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 17
      }, {
        "Name": "QB Hit",
        "GameStatValue": 23
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 64.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Zach Miller",
      "PlayerPos": "TE",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 236
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jalen Mills",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 14
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 53
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Barkevious Mingo",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 27
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Kevin Minter",
      "PlayerPos": "LB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Earl Mitchell",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Mike Mitchell",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Terrance Mitchell",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 18
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 40
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Joe Mixon",
      "PlayerPos": "RB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 626
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 30
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 287
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Arthur Moats",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Ifeanyi Momah",
      "PlayerPos": "TE",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 46
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Donte Moncrief",
      "PlayerPos": "WR",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 391
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Ty Montgomery",
      "PlayerPos": "RB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 273
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 173
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Chris Moore",
      "PlayerPos": "WR",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -9
      }, {
        "Name": "Receptions",
        "GameStatValue": 18
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 248
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 346
      }, {
        "Name": "Fumble Recovered for TD",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Corey Moore",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Damontre Moore",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Matt Moore",
      "PlayerPos": "QB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 78
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 49
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 861
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 12
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Sterling Moore",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Fabian Moreau",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "David Morgan",
      "PlayerPos": "TE",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 95
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Derrick Morgan",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 7.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 14
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 54
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Alfred Morris",
      "PlayerPos": "RB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 547
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 45
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Antonio Morrison",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 44
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Nicholas Morrow",
      "PlayerPos": "LB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "C.J. Mosley",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 36
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 94
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Avery Moss",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Raheem Mostert",
      "PlayerPos": "RB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 30
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 83
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Deiontrez Mount",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Al-Quadin Muhammad",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Captain Munnerlyn",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Calvin Munson",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Louis Murphy",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 73
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Marcus Murphy",
      "PlayerPos": "RB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 41
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 7
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Ryan Murphy",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "DeMarco Murray",
      "PlayerPos": "RB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 659
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 39
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 266
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Eric Murray",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Latavius Murray",
      "PlayerPos": "RB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 842
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 15
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 103
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Patrick Murray",
      "PlayerPos": "K",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jason Myers",
      "PlayerPos": "K",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 5
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Jalen Myrick",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Carl Nassib",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Keanu Neal",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 33
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 19
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Sharrod Neasman",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Corey Nelson",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "J.J. Nelson",
      "PlayerPos": "WR",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 37
      }, {
        "Name": "Receptions",
        "GameStatValue": 29
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 508
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jordy Nelson",
      "PlayerPos": "WR",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 482
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Reggie Nelson",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 29
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Steven Nelson",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Terence Newman",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Cam Newton",
      "PlayerPos": "QB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 291
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 201
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3302
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 22
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 16
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 35
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 139
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 754
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 9
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -17
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Yannick Ngakoue",
      "PlayerPos": "DL",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 12
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 67
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 23
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 85
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 4
      }, {
        "Name": "50+ Yard Fumble Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Haloti Ngata",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Montae Nicholson",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Hardy Nickerson",
      "PlayerPos": "LB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Troy Niklas",
      "PlayerPos": "TE",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 132
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Roosevelt Nix",
      "PlayerPos": "RB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "David Njoku",
      "PlayerPos": "TE",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 32
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 386
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Robert Nkemdiche",
      "PlayerPos": "DL",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Josh Norman",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Nick Novak",
      "PlayerPos": "K",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Mike Nugent",
      "PlayerPos": "K",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Rakeem Nunez-Roches",
      "PlayerPos": "DL",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 0.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Mark Nzeocha",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Nick O'Leary",
      "PlayerPos": "TE",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 322
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "James O'Shaughnessy",
      "PlayerPos": "TE",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 149
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Chris Odom",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Emmanuel Ogbah",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Alec Ogletree",
      "PlayerPos": "LB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 32
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 41
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Larry Ogunjobi",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Alex Okafor",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 26
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Romeo Okwara",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Jamize Olawale",
      "PlayerPos": "RB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 43
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 33
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Branden Oliver",
      "PlayerPos": "RB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 83
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 26
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Greg Olsen",
      "PlayerPos": "TE",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 191
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Patrick Onwuasor",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 23
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "David Onyemata",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Brian Orakpo",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 18
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 68.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Nate Orchard",
      "PlayerPos": "LB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 14
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 16
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Brock Osweiler",
      "PlayerPos": "QB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 96
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 76
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1088
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 10
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 14
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 64
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Green Bay Packers",
      "PlayerPos": "DEF",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 10
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1050
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 372
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5582
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 9
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Stephen Paea",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Tenny Palepoi",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Carson Palmer",
      "PlayerPos": "QB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 164
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 103
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1978
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 9
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 7
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 22
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 14
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Nate Palmer",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Carolina Panthers",
      "PlayerPos": "DEF",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 15
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1078
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 315
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 4
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5074
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 10
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "DeVante Parker",
      "PlayerPos": "WR",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 670
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Ron Parker",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Cody Parkey",
      "PlayerPos": "K",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Will Parks",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "David Parry",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "New England Patriots",
      "PlayerPos": "DEF",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 9
      }, {
        "Name": "Safeties",
        "GameStatValue": 2
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 885
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 278
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5856
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Cordarrelle Patterson",
      "PlayerPos": "WR",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 121
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 31
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 309
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 538
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Niles Paul",
      "PlayerPos": "TE",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 13
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 94
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 47
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Charone Peake",
      "PlayerPos": "WR",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Domata Peko",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Kyle Peko",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Elijhaa Penny",
      "PlayerPos": "RB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 124
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 4
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 38
      }, {
        "Name": "Tackle",
        "GameStatValue": 9
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jabrill Peppers",
      "PlayerPos": "DB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 45
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Julius Peppers",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 11
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 61
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Samaje Perine",
      "PlayerPos": "RB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 603
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 22
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 182
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 48
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Paul Perkins",
      "PlayerPos": "RB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 90
      }, {
        "Name": "Receptions",
        "GameStatValue": 8
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 46
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Breshad Perriman",
      "PlayerPos": "WR",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 77
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Nick Perry",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 23
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 7
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 43
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Senorise Perry",
      "PlayerPos": "RB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 30
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 115
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Denzel Perryman",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Nathan Peterman",
      "PlayerPos": "QB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 24
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 25
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 252
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 7
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 23
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -6
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Corey Peters",
      "PlayerPos": "DL",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Marcus Peters",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 137
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 45
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Adrian Peterson",
      "PlayerPos": "RB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 529
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 11
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 70
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Patrick Peterson",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 30
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 22
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 47
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Bryce Petty",
      "PlayerPos": "QB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 55
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 57
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 544
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 3
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 8
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 7
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 55
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Adrian Phillips",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 13
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "John Phillips",
      "PlayerPos": "TE",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jordan Phillips",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 29
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Darius Philon",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 26
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Michael Pierce",
      "PlayerPos": "DL",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Kevin Pierre-Louis",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jason Pierre-Paul",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 8.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 48.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Dontari Poe",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 10
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 17.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Brian Poole",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Paul Posluszny",
      "PlayerPos": "LB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Bilal Powell",
      "PlayerPos": "RB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 772
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 170
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jordan Poyer",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 32
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 13
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 33
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 32
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matt Prater",
      "PlayerPos": "K",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 0-19",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 7
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Dak Prescott",
      "PlayerPos": "QB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 308
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 182
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3324
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 22
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 13
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 32
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 57
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 357
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Jay Prosch",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 31
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "C.J. Prosise",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 23
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 87
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Calvin Pryor",
      "PlayerPos": "DB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Terrelle Pryor",
      "PlayerPos": "WR",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 240
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Hayes Pullard",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Elijah Qualls",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Brian Quick",
      "PlayerPos": "WR",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 76
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Glover Quin",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 62
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Robert Quinn",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 8.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 67.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Reggie Ragland",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Oakland Raiders",
      "PlayerPos": "DEF",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 12
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 893
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 343
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 8
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5601
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Bobby Rainey",
      "PlayerPos": "RB",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 18
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 360
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Los Angeles Rams",
      "PlayerPos": "DEF",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 18
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 17
      }, {
        "Name": "Safeties",
        "GameStatValue": 2
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 5
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1459
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 317
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5432
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jalen Ramsey",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 17
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 34
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Damarious Randall",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 35
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Sheldon Rankins",
      "PlayerPos": "DL",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 27
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Baltimore Ravens",
      "PlayerPos": "DEF",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 22
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 16
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1258
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 291
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5201
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Thomas Rawls",
      "PlayerPos": "RB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 157
      }, {
        "Name": "Receptions",
        "GameStatValue": 9
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 94
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Shane Ray",
      "PlayerPos": "LB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Kalif Raymond",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -1
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 12
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 298
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "D.J. Reader",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Haason Reddick",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Washington Redskins",
      "PlayerPos": "DEF",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 16
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 7
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 12
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 851
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 362
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5566
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Brooks Reed",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 41
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jarran Reed",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 22
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jordan Reed",
      "PlayerPos": "TE",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 211
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Kalan Reed",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Bernard Reedy",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 14
      }, {
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 15
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 224
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jalen Reeves-Maybin",
      "PlayerPos": "LB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Eric Reid",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Trevor Reilly",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Darrelle Revis",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Vincent Rey",
      "PlayerPos": "LB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 33
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Josh Reynolds",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 104
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Xavier Rhodes",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Patrick Ricard",
      "PlayerPos": "RB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 11
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jalen Richard",
      "PlayerPos": "RB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 275
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 27
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 256
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 245
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jordan Richards",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Paul Richardson",
      "PlayerPos": "WR",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 703
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Sheldon Richardson",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Theo Riddick",
      "PlayerPos": "RB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 286
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Receptions",
        "GameStatValue": 53
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 444
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Hassan Ridgeway",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Stevan Ridley",
      "PlayerPos": "RB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 108
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Duke Riley",
      "PlayerPos": "LB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Christian Ringo",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Aaron Ripkowski",
      "PlayerPos": "RB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 39
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Philip Rivers",
      "PlayerPos": "QB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 360
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 215
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4515
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 28
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 10
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 18
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 6
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 18
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Andre Roberts",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 12
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1058
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Darryl Roberts",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Elandon Roberts",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 22
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Michael Roberts",
      "PlayerPos": "TE",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 46
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Seth Roberts",
      "PlayerPos": "WR",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 455
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Craig Robertson",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 27
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 19
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Nickell Robey-Coleman",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 56
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "A'Shawn Robinson",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Aldrick Robinson",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 260
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Allen Robinson",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 17
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Demarcus Robinson",
      "PlayerPos": "WR",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 212
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": -4
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Edmond Robinson",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Josh Robinson",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Keenan Robinson",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Patrick Robinson",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 18
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 36
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Rashard Robinson",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Brian Robison",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Bradley Roby",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 17
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Isaac Rochell",
      "PlayerPos": "DL",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Aaron Rodgers",
      "PlayerPos": "QB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 154
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 84
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1675
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 16
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 6
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 22
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 24
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 126
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jacquizz Rodgers",
      "PlayerPos": "RB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 244
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 9
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 74
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 255
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Richard Rodgers",
      "PlayerPos": "TE",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 160
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Dominique Rodgers-Cromartie",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Ben Roethlisberger",
      "PlayerPos": "QB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 360
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 201
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4251
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 28
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 14
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 21
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 28
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 47
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -10
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Chester Rogers",
      "PlayerPos": "WR",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 8
      }, {
        "Name": "Receptions",
        "GameStatValue": 23
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 284
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 85
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Eli Rogers",
      "PlayerPos": "WR",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 149
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 146
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Quinten Rollins",
      "PlayerPos": "DB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Aldrick Rosas",
      "PlayerPos": "K",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Nick Rose",
      "PlayerPos": "K",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "John Ross",
      "PlayerPos": "WR",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Eric Rowe",
      "PlayerPos": "DB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Ahtyba Rubin",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Frostee Rucker",
      "PlayerPos": "DL",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Jake Rudock",
      "PlayerPos": "QB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 3
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 2
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 24
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kyle Rudolph",
      "PlayerPos": "TE",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 532
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Travis Rudolph",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 101
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Cooper Rush",
      "PlayerPos": "QB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 1
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 2
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "KeiVarae Russell",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Ryan Russell",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jake Ryan",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 29
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Logan Ryan",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matt Ryan",
      "PlayerPos": "QB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 342
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 187
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4095
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 20
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 12
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 24
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 32
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 143
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "New Orleans Saints",
      "PlayerPos": "DEF",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 20
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 17
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1043
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 314
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5384
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Curtis Samuel",
      "PlayerPos": "WR",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 64
      }, {
        "Name": "Receptions",
        "GameStatValue": 15
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 115
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 221
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Emmanuel Sanders",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 555
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": -2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Cairo Santos",
      "PlayerPos": "K",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "FG Made 30-39",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Mohamed Sanu",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 1
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 51
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 10
      }, {
        "Name": "Receptions",
        "GameStatValue": 67
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 703
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Eric Saubert",
      "PlayerPos": "TE",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Tom Savage",
      "PlayerPos": "QB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 125
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 98
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1412
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 6
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 21
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 7
      }, {
        "Name": "Fumble",
        "GameStatValue": 8
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Orlando Scandrick",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Brennan Scarlett",
      "PlayerPos": "LB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Joe Schobert",
      "PlayerPos": "LB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 57
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 18
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Seattle Seahawks",
      "PlayerPos": "DEF",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 14
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 13
      }, {
        "Name": "Safeties",
        "GameStatValue": 2
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 1241
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 322
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5171
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 8
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "500+ Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Ricky Seals-Jones",
      "PlayerPos": "TE",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 201
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Da'Norris Searcy",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Austin Seferian-Jenkins",
      "PlayerPos": "TE",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 357
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Andrew Sendejo",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 26
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 70
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Coty Sensabaugh",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 32
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Kevon Seymour",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Adam Shaheen",
      "PlayerPos": "TE",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 127
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Hunter Sharp",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 54
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 93
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Josh Shaw",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Ryan Shazier",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "DeShawn Shead",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jabaal Sheard",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 14
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 46
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Derrick Shelby",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Danny Shelton",
      "PlayerPos": "DL",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Russell Shepard",
      "PlayerPos": "WR",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 19
      }, {
        "Name": "Receptions",
        "GameStatValue": 17
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 202
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 65
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Sterling Shepard",
      "PlayerPos": "WR",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 59
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 731
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Kelvin Sheppard",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Marcus Sherels",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Anthony Sherman",
      "PlayerPos": "RB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 40
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 47
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Richard Sherman",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kawann Short",
      "PlayerPos": "DL",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 22
      }, {
        "Name": "Sack",
        "GameStatValue": 7.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 11
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 17
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 35.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Trevor Siemian",
      "PlayerPos": "QB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 206
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 143
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2285
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 12
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 14
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 33
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 31
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 127
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Sealver Siliga",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Justin Simmons",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 65
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "John Simon",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 26
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Charles Sims",
      "PlayerPos": "RB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 95
      }, {
        "Name": "Receptions",
        "GameStatValue": 35
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 249
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 32
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Dion Sims",
      "PlayerPos": "TE",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 180
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "LeShaun Sims",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Pat Sims",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Deontae Skinner",
      "PlayerPos": "LB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Buster Skrine",
      "PlayerPos": "DB",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Matthew Slater",
      "PlayerPos": "WR",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Darius Slay",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 8
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 26
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 73
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Wendell Smallwood",
      "PlayerPos": "RB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 174
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 13
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 103
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 93
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Tanzel Smart",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Alex Smith",
      "PlayerPos": "QB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 341
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 164
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4042
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 26
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 35
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 5
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 9
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 8
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 60
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 355
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "C.J. Smith",
      "PlayerPos": "DB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Chris Smith",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 36
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "De'Veon Smith",
      "PlayerPos": "RB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 27
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Geno Smith",
      "PlayerPos": "QB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 21
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 15
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 212
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Harrison Smith",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 12
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 42
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Jacquies Smith",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jaylon Smith",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 31
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Jimmy Smith",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 58
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 47
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Jonnu Smith",
      "PlayerPos": "TE",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 157
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Lee Smith",
      "PlayerPos": "TE",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 76
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Marcus Smith",
      "PlayerPos": "DL",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Preston Smith",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 26
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 21
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 40.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Rod Smith",
      "PlayerPos": "RB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 232
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 19
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 202
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 20
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Ryan Smith",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Sean Smith",
      "PlayerPos": "DB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Shane Smith",
      "PlayerPos": "RB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Telvin Smith",
      "PlayerPos": "LB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 26
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 56
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 52
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 12
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Torrey Smith",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -3
      }, {
        "Name": "Receptions",
        "GameStatValue": 36
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 430
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Za'Darius Smith",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 16
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "JuJu Smith-Schuster",
      "PlayerPos": "WR",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 917
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 240
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Dawuane Smoot",
      "PlayerPos": "DL",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Willie Snead",
      "PlayerPos": "WR",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 92
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Daniel Sorensen",
      "PlayerPos": "DB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 67
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 22
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Martrell Spaight",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 30
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Akeem Spence",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 23
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Noah Spence",
      "PlayerPos": "DL",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 11
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Sean Spence",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "C.J. Spiller",
      "PlayerPos": "RB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jeremy Sprinkle",
      "PlayerPos": "TE",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 13
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Darren Sproles",
      "PlayerPos": "RB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 61
      }, {
        "Name": "Receptions",
        "GameStatValue": 7
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 73
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Matthew Stafford",
      "PlayerPos": "QB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 371
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 194
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 4446
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 29
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 10
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 47
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 6
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 29
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 98
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 7
      }, {
        "Name": "Fumble",
        "GameStatValue": 11
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -13
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Drew Stanton",
      "PlayerPos": "QB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 79
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 80
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 894
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 5
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 7
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 9
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 7
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Pittsburgh Steelers",
      "PlayerPos": "DEF",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 16
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 12
      }, {
        "Name": "Safeties",
        "GameStatValue": 1
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kicks",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 837
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 296
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 7
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 1
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 4910
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 7
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Shamar Stephen",
      "PlayerPos": "DL",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Neal Sterling",
      "PlayerPos": "TE",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 82
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "ArDarius Stewart",
      "PlayerPos": "WR",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 27
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 82
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 173
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Darian Stewart",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 33
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Grover Stewart",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jonathan Stewart",
      "PlayerPos": "RB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 680
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 8
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 52
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kenny Stills",
      "PlayerPos": "WR",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 847
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 6
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Ed Stinson",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Luke Stocker",
      "PlayerPos": "TE",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 30
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Jaelen Strong",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 38
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Nate Stupar",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Caleb Sturgis",
      "PlayerPos": "K",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Ryan Succop",
      "PlayerPos": "K",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 10
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 16
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Nate Sudfeld",
      "PlayerPos": "QB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 19
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 4
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 134
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 3
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 22
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -6
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Terrell Suggs",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 11
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 19
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 71.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Ndamukong Suh",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 19
      }, {
        "Name": "Sack",
        "GameStatValue": 4.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 17
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Phillip Supernaw",
      "PlayerPos": "TE",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 39
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Cameron Sutton",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Geoff Swaim",
      "PlayerPos": "TE",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 25
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "D.J. Swearinger",
      "PlayerPos": "DB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 62
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 32
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Ryan Switzer",
      "PlayerPos": "WR",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 5
      }, {
        "Name": "Receptions",
        "GameStatValue": 6
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 41
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 856
      }, {
        "Name": "Kickoff and Punt Return Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Teez Tabor",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Aqib Talib",
      "PlayerPos": "DB",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 103
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Keith Tandy",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Cordrea Tankersley",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Darryl Tapp",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Charles Tapper",
      "PlayerPos": "DL",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Jaquiski Tartt",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 37
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Brandon Tate",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 81
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 741
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Golden Tate",
      "PlayerPos": "WR",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 22
      }, {
        "Name": "Receptions",
        "GameStatValue": 92
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1003
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Giorgio Tavecchio",
      "PlayerPos": "K",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 5
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 3
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 2
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Devin Taylor",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jamar Taylor",
      "PlayerPos": "DB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 3.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jordan Taylor",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 142
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 103
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Taywan Taylor",
      "PlayerPos": "WR",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 43
      }, {
        "Name": "Receptions",
        "GameStatValue": 16
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 231
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Trent Taylor",
      "PlayerPos": "WR",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 430
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 289
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Tyrod Taylor",
      "PlayerPos": "QB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 263
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 157
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2799
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 14
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 4
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 46
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 84
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 427
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -7
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Vincent Taylor",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Manti Te'o",
      "PlayerPos": "LB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Randall Telfer",
      "PlayerPos": "TE",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 36
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Houston Texans",
      "PlayerPos": "DEF",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 11
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 13
      }, {
        "Name": "Safeties",
        "GameStatValue": 1
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 854
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 416
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 3
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 4
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5546
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 2
      }, {
        "Name": "450-499 Yards Allowed",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Adam Thielen",
      "PlayerPos": "WR",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 11
      }, {
        "Name": "Receptions",
        "GameStatValue": 91
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1276
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Cam Thomas",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "De'Anthony Thomas",
      "PlayerPos": "WR",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 14
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 143
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 325
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Demaryius Thomas",
      "PlayerPos": "WR",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 949
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Earl Thomas",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 32
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 97
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Joe Thomas",
      "PlayerPos": "LB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Julius Thomas",
      "PlayerPos": "TE",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 388
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Logan Thomas",
      "PlayerPos": "TE",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 64
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Michael Thomas",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }, {
        "Name": "Receptions",
        "GameStatValue": 104
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 1245
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Mike Thomas",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 93
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 15
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Robert Thomas",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Shamarko Thomas",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Solomon Thomas",
      "PlayerPos": "DL",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Chris Thompson",
      "PlayerPos": "WR",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 65
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 315
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 64
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 294
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 39
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 510
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 165
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Darian Thompson",
      "PlayerPos": "DB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Deonte Thompson",
      "PlayerPos": "WR",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -5
      }, {
        "Name": "Receptions",
        "GameStatValue": 38
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 555
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 229
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Shaq Thompson",
      "PlayerPos": "LB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 15
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tedric Thompson",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Cedric Thornton",
      "PlayerPos": "DL",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Neiko Thorpe",
      "PlayerPos": "DB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Lawrence Timmons",
      "PlayerPos": "LB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 26
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "John Timu",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tennessee Titans",
      "PlayerPos": "DEF",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 9
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 11
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 923
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 332
      }, {
        "Name": "Points Allowed 1-6",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 4
      }, {
        "Name": "Points Allowed 35+",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 5248
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 6
      }, {
        "Name": "400-449 Yards Allowed",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Jordan Todman",
      "PlayerPos": "RB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 6
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Levine Toilolo",
      "PlayerPos": "TE",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 122
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Recovered for TD",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mike Tolbert",
      "PlayerPos": "RB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 247
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 14
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 78
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Scott Tolzien",
      "PlayerPos": "QB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 9
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 9
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 128
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 2
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 4
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Dalvin Tomlinson",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Eric Tomlinson",
      "PlayerPos": "TE",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 121
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Korey Toomer",
      "PlayerPos": "LB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 59
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "50+ Yard INT Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Fitzgerald Toussaint",
      "PlayerPos": "RB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 25
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 9
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 94
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Ross Travis",
      "PlayerPos": "TE",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 76
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Brynden Trawick",
      "PlayerPos": "DB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Austin Traylor",
      "PlayerPos": "TE",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 100
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Laquon Treadwell",
      "PlayerPos": "WR",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 200
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Bryce Treggs",
      "PlayerPos": "WR",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 79
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 24
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Danny Trevathan",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 29
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 14
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mitchell Trubisky",
      "PlayerPos": "QB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 196
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 134
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 2193
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 7
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 7
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 31
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 41
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 248
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 10
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 6
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -13
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Desmond Trufant",
      "PlayerPos": "DB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 36
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 12
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 43
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 15
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Justin Tucker",
      "PlayerPos": "K",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "FG Made 20-29",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 5
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Stephon Tuitt",
      "PlayerPos": "DL",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 8
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Robert Turbin",
      "PlayerPos": "RB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 53
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 9
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 56
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Will Tye",
      "PlayerPos": "TE",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 38
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Mitch Unrein",
      "PlayerPos": "DL",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Courtney Upshaw",
      "PlayerPos": "DL",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 10
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Brent Urban",
      "PlayerPos": "DL",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "C.J. Uzomah",
      "PlayerPos": "TE",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 92
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 9
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kenny Vaccaro",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 48
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 41
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7.5
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Destiny Vaeao",
      "PlayerPos": "DL",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tanner Vallejo",
      "PlayerPos": "LB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Kyle Van Noy",
      "PlayerPos": "LB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Sack",
        "GameStatValue": 5.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 33.5
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Eddie Vanderdoes",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Nick Vannett",
      "PlayerPos": "TE",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 124
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Shane Vereen",
      "PlayerPos": "RB",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Incomplete Passes",
        "GameStatValue": 1
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 45
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 164
      }, {
        "Name": "Receptions",
        "GameStatValue": 44
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 253
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 196
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Alterraun Verner",
      "PlayerPos": "DB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Olivier Vernon",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 6.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 12
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 35.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Jason Verrett",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Nick Vigil",
      "PlayerPos": "LB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 34
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Zach Vigil",
      "PlayerPos": "LB",
      "TeamAbbr": "WAS",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 18
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Minnesota Vikings",
      "PlayerPos": "DEF",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Interceptions",
        "GameStatValue": 14
      }, {
        "Name": "Fumbles Recovered",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Forced",
        "GameStatValue": 8
      }, {
        "Name": "Safeties",
        "GameStatValue": 1
      }, {
        "Name": "Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 991
      }, {
        "Name": "Points Allowed",
        "GameStatValue": 250
      }, {
        "Name": "Points Allowed 0",
        "GameStatValue": 1
      }, {
        "Name": "Points Allowed 7-13",
        "GameStatValue": 5
      }, {
        "Name": "Points Allowed 14-20",
        "GameStatValue": 6
      }, {
        "Name": "Points Allowed 21-27",
        "GameStatValue": 2
      }, {
        "Name": "Points Allowed 28-34",
        "GameStatValue": 2
      }, {
        "Name": "Yards Allowed",
        "GameStatValue": 4415
      }, {
        "Name": "100-199 Yards Allowed",
        "GameStatValue": 1
      }, {
        "Name": "200-299 Yards Allowed",
        "GameStatValue": 10
      }, {
        "Name": "300-399 Yards Allowed",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Adam Vinatieri",
      "PlayerPos": "K",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 5
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Danny Vitale",
      "PlayerPos": "RB",
      "TeamAbbr": "CLE",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 19
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Bobby Wagner",
      "PlayerPos": "LB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 97
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 36
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Safety",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 13
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Cameron Wake",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 9.5
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 26
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 65
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Erik Walden",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 7
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 22
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Clive Walford",
      "PlayerPos": "TE",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 80
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Anthony Walker",
      "PlayerPos": "LB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Delanie Walker",
      "PlayerPos": "TE",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": -2
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 74
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 807
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 2
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "DeMarcus Walker",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Joe Walker",
      "PlayerPos": "LB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Tyrunn Walker",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 6
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Aaron Wallace",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Mike Wallace",
      "PlayerPos": "WR",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 4
      }, {
        "Name": "Receptions",
        "GameStatValue": 52
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 748
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Blair Walsh",
      "PlayerPos": "K",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 6
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 7
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 8
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 3
      }, {
        "Name": "FG Missed 40-49",
        "GameStatValue": 4
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "L.T. Walton",
      "PlayerPos": "DL",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 3
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Jihad Ward",
      "PlayerPos": "DL",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 9
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Jimmie Ward",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 43
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "T.J. Ward",
      "PlayerPos": "DB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Terron Ward",
      "PlayerPos": "RB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 129
      }, {
        "Name": "Receptions",
        "GameStatValue": 3
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 14
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Adolphus Washington",
      "PlayerPos": "DL",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Cornelius Washington",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 2.5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 11
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "DeAndre Washington",
      "PlayerPos": "RB",
      "TeamAbbr": "OAK",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 153
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 34
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 197
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 86
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Dwayne Washington",
      "PlayerPos": "RB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 44
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 14
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 31
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Carlos Watkins",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 11
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Jaylen Watkins",
      "PlayerPos": "DB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Sammy Watkins",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 593
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 8
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Benjamin Watson",
      "PlayerPos": "TE",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 522
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Dekoda Watson",
      "PlayerPos": "LB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Deshaun Watson",
      "PlayerPos": "QB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 126
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 78
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 1699
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 19
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 8
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 19
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 36
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 269
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 3
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Terrell Watson",
      "PlayerPos": "RB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 8
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 140
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Derek Watt",
      "PlayerPos": "RB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 24
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 35
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "J.J. Watt",
      "PlayerPos": "DL",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "T.J. Watt",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 17
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 10
      }, {
        "Name": "QB Hit",
        "GameStatValue": 13
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 36
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Trae Waynes",
      "PlayerPos": "DB",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 21
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Sean Weatherspoon",
      "PlayerPos": "LB",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Joe Webb",
      "PlayerPos": "QB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 2
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 5
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 35
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 8
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 54
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Lardarius Webb",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 37
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Kayvon Webster",
      "PlayerPos": "DB",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Eric Weddle",
      "PlayerPos": "DB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 6
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Interception return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 8
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 85
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Eric Weems",
      "PlayerPos": "WR",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Receptions",
        "GameStatValue": 1
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 5
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 33
      }, {
        "Name": "Tackle",
        "GameStatValue": 7
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Carson Wentz",
      "PlayerPos": "QB",
      "TeamAbbr": "PHI",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 265
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 175
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3296
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 33
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 7
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 28
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 4
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 5
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 64
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 299
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 9
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 4
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 4
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -23
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Charcandrick West",
      "PlayerPos": "RB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 72
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 27
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 150
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 37
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Terrance West",
      "PlayerPos": "RB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 138
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Receptions",
        "GameStatValue": 2
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 23
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Dede Westbrook",
      "PlayerPos": "WR",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 339
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 19
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Ethan Westbrooks",
      "PlayerPos": "DL",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Sack",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 7
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 20
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Griff Whalen",
      "PlayerPos": "WR",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 23
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Markus Wheaton",
      "PlayerPos": "WR",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 51
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "D.J. White",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "James White",
      "PlayerPos": "RB",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 171
      }, {
        "Name": "Receptions",
        "GameStatValue": 56
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 429
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Kevin White",
      "PlayerPos": "WR",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 6
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tre'Davious White",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 16
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 18
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 86
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 52
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Yard Fumble Return TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tahir Whitehead",
      "PlayerPos": "LB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 32
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 9
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 9
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Fozzy Whittaker",
      "PlayerPos": "RB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 18
      }, {
        "Name": "Receptions",
        "GameStatValue": 5
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 47
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 110
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Kyle Wilber",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "J.J. Wilcox",
      "PlayerPos": "DB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Michael Wilhoite",
      "PlayerPos": "LB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Muhammad Wilkerson",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 3.5
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 3
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13.5
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }]
    }, {
      "PlayerName": "Andre Williams",
      "PlayerPos": "RB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 25
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Brandon Williams",
      "PlayerPos": "TE",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 121
      }, {
        "Name": "Games Played",
        "GameStatValue": 2
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }, {
        "Name": "Tackle",
        "GameStatValue": 18
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Chad Williams",
      "PlayerPos": "WR",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 33
      }, {
        "Name": "Receptions",
        "GameStatValue": 3
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 31
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Damien Williams",
      "PlayerPos": "RB",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 181
      }, {
        "Name": "Receptions",
        "GameStatValue": 20
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 155
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": -7
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jamaal Williams",
      "PlayerPos": "RB",
      "TeamAbbr": "GB",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 556
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 25
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 262
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 6
      }]
    }, {
      "PlayerName": "Kasen Williams",
      "PlayerPos": "WR",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 84
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kerwynn Williams",
      "PlayerPos": "RB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 426
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 10
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 93
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 463
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Kyle Williams",
      "PlayerPos": "DL",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 21
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 21
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 9
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 17
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Leonard Williams",
      "PlayerPos": "DL",
      "TeamAbbr": "NYJ",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 25
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "QB Hit",
        "GameStatValue": 25
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Marcus Williams",
      "PlayerPos": "DB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 31
      }, {
        "Name": "Tackle",
        "GameStatValue": 18
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 4
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }, {
        "Name": "Tackle",
        "GameStatValue": 59
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 4
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Maxx Williams",
      "PlayerPos": "TE",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Attempts",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 15
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 86
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Mike Williams",
      "PlayerPos": "WR",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 95
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Nick Williams",
      "PlayerPos": "WR",
      "TeamAbbr": "ATL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 30
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "P.J. Williams",
      "PlayerPos": "DB",
      "TeamAbbr": "NO",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 9
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Shawn Williams",
      "PlayerPos": "DB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 15
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Sylvester Williams",
      "PlayerPos": "DL",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Terrance Williams",
      "PlayerPos": "WR",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 15
      }, {
        "Name": "Receptions",
        "GameStatValue": 53
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 568
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Tim Williams",
      "PlayerPos": "LB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Tramon Williams",
      "PlayerPos": "DB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 11
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 12
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Trevor Williams",
      "PlayerPos": "DB",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 13
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 28
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Tyrell Williams",
      "PlayerPos": "WR",
      "TeamAbbr": "LAC",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 728
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 3
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Vince Williams",
      "PlayerPos": "LB",
      "TeamAbbr": "PIT",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 20
      }, {
        "Name": "Sack",
        "GameStatValue": 8
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 13
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 14
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 63
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Xavier Williams",
      "PlayerPos": "DL",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Sack",
        "GameStatValue": 0.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 5
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Avery Williamson",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 40
      }, {
        "Name": "Sack",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 12
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Jordan Willis",
      "PlayerPos": "DL",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 8
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Luke Willson",
      "PlayerPos": "TE",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 153
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 42
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Albert Wilson",
      "PlayerPos": "WR",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 6
      }, {
        "Name": "Receptions",
        "GameStatValue": 42
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 554
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 18
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Brandon Wilson",
      "PlayerPos": "RB",
      "TeamAbbr": "CIN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Damien Wilson",
      "PlayerPos": "LB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Jarrod Wilson",
      "PlayerPos": "DB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Quincy Wilson",
      "PlayerPos": "DB",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 33
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "3+ Passes Defended Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Ramik Wilson",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 11
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Russell Wilson",
      "PlayerPos": "QB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 339
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 214
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3983
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 34
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 11
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 43
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "400+ Passing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 95
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 586
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 3
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 3
      }, {
        "Name": "Fumble",
        "GameStatValue": 14
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 3
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 6
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -11
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Tavon Wilson",
      "PlayerPos": "DB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 2
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 23
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 19
      }, {
        "Name": "Games Played",
        "GameStatValue": 13
      }]
    }, {
      "PlayerName": "Jameis Winston",
      "PlayerPos": "QB",
      "TeamAbbr": "TB",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 282
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 160
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 3504
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 19
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 11
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 33
      }, {
        "Name": "300-399 Passing Yards Bonus",
        "GameStatValue": 6
      }, {
        "Name": "40+ Passing Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Passing Yards TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 33
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 135
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 7
      }, {
        "Name": "Fumble",
        "GameStatValue": 15
      }, {
        "Name": "2-Point Conversions",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": -9
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Deatrich Wise",
      "PlayerPos": "DL",
      "TeamAbbr": "NE",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 19
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 38
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Ahkello Witherspoon",
      "PlayerPos": "DB",
      "TeamAbbr": "SF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 7
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 42
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Jason Witten",
      "PlayerPos": "TE",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 560
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Derek Wolfe",
      "PlayerPos": "DL",
      "TeamAbbr": "DEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 13
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 6
      }, {
        "Name": "QB Hit",
        "GameStatValue": 6
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 8
      }]
    }, {
      "PlayerName": "Danny Woodhead",
      "PlayerPos": "RB",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 56
      }, {
        "Name": "Receptions",
        "GameStatValue": 33
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 200
      }, {
        "Name": "Tackle",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Al Woods",
      "PlayerPos": "DL",
      "TeamAbbr": "IND",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 24
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 7
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Robert Woods",
      "PlayerPos": "WR",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 12
      }, {
        "Name": "Receptions",
        "GameStatValue": 56
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 781
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 5
      }, {
        "Name": "40+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "50+ Receiving Yard TD Bonus",
        "GameStatValue": 2
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 2
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Xavier Woods",
      "PlayerPos": "DB",
      "TeamAbbr": "DAL",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 9
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 3
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 7
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 6
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Wesley Woodyard",
      "PlayerPos": "LB",
      "TeamAbbr": "TEN",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 40
      }, {
        "Name": "Sack",
        "GameStatValue": 5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Touchdown (Fumble return)",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Fumble Return Yards",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 8
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 23
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "Daryl Worley",
      "PlayerPos": "DB",
      "TeamAbbr": "CAR",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 14
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 10
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Chris Wormley",
      "PlayerPos": "DL",
      "TeamAbbr": "BAL",
      "Stats": [{
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 11
      }]
    }, {
      "PlayerName": "Paul Worrilow",
      "PlayerPos": "LB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 10
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 3
      }]
    }, {
      "PlayerName": "Jerel Worthy",
      "PlayerPos": "DL",
      "TeamAbbr": "",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 4
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 1
      }]
    }, {
      "PlayerName": "Gabe Wright",
      "PlayerPos": "DL",
      "TeamAbbr": "MIA",
      "Stats": [{
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 12
      }]
    }, {
      "PlayerName": "Jarius Wright",
      "PlayerPos": "WR",
      "TeamAbbr": "MIN",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 198
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "Games Played",
        "GameStatValue": 15
      }]
    }, {
      "PlayerName": "K.J. Wright",
      "PlayerPos": "LB",
      "TeamAbbr": "SEA",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 37
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 6
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 5
      }, {
        "Name": "QB Hit",
        "GameStatValue": 2
      }, {
        "Name": "10+ Tackles Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Kendall Wright",
      "PlayerPos": "WR",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Receiving Yards",
        "GameStatValue": 614
      }, {
        "Name": "Receiving Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Receiving Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Scooby Wright",
      "PlayerPos": "LB",
      "TeamAbbr": "ARI",
      "Stats": [{
        "Name": "Games Played",
        "GameStatValue": 9
      }]
    }, {
      "PlayerName": "Shareece Wright",
      "PlayerPos": "DB",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Tackle",
        "GameStatValue": 37
      }, {
        "Name": "Assisted Tackles",
        "GameStatValue": 7
      }, {
        "Name": "Defense Interception",
        "GameStatValue": 1
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 5
      }, {
        "Name": "Interception Return Yards",
        "GameStatValue": 54
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "Kerry Wynn",
      "PlayerPos": "DL",
      "TeamAbbr": "NYG",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 5
      }, {
        "Name": "Sack",
        "GameStatValue": 1
      }, {
        "Name": "Blocked Kick (punt, FG, PAT)",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 5
      }]
    }, {
      "PlayerName": "Eddie Yarbrough",
      "PlayerPos": "DL",
      "TeamAbbr": "BUF",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 2
      }, {
        "Name": "Pass Defended",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 1
      }, {
        "Name": "QB Hit",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "T.J. Yates",
      "PlayerPos": "QB",
      "TeamAbbr": "HOU",
      "Stats": [{
        "Name": "Passing Completions",
        "GameStatValue": 47
      }, {
        "Name": "Incomplete Passes",
        "GameStatValue": 50
      }, {
        "Name": "Passing Yards",
        "GameStatValue": 523
      }, {
        "Name": "Passing Touchdowns",
        "GameStatValue": 4
      }, {
        "Name": "Interceptions Thrown",
        "GameStatValue": 3
      }, {
        "Name": "Every Time Sacked",
        "GameStatValue": 13
      }, {
        "Name": "Rushing Attempts",
        "GameStatValue": 5
      }, {
        "Name": "Rushing Yards",
        "GameStatValue": 51
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 5
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 3
      }, {
        "Name": "Games Played",
        "GameStatValue": 10
      }]
    }, {
      "PlayerName": "T.J. Yeldon",
      "PlayerPos": "RB",
      "TeamAbbr": "JAX",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 253
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 2
      }, {
        "Name": "40+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "50+ Rushing Yard TD Bonus",
        "GameStatValue": 1
      }, {
        "Name": "100-199 Rushing Yards Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Receptions",
        "GameStatValue": 30
      }, {
        "Name": "Receiving Yards",
        "GameStatValue": 224
      }, {
        "Name": "Fumbles Lost",
        "GameStatValue": 1
      }, {
        "Name": "Fumble",
        "GameStatValue": 2
      }, {
        "Name": "Tackle",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 4
      }]
    }, {
      "PlayerName": "Willie Young",
      "PlayerPos": "LB",
      "TeamAbbr": "CHI",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 3
      }, {
        "Name": "Sack",
        "GameStatValue": 2
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 2
      }, {
        "Name": "QB Hit",
        "GameStatValue": 4
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 13
      }, {
        "Name": "Games Played",
        "GameStatValue": 7
      }]
    }, {
      "PlayerName": "Zach Zenner",
      "PlayerPos": "RB",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Rushing Yards",
        "GameStatValue": 26
      }, {
        "Name": "Rushing Touchdowns",
        "GameStatValue": 1
      }, {
        "Name": "Kickoff and Punt Return Yards",
        "GameStatValue": 62
      }, {
        "Name": "Tackle",
        "GameStatValue": 4
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 16
      }]
    }, {
      "PlayerName": "Anthony Zettel",
      "PlayerPos": "DL",
      "TeamAbbr": "DET",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 12
      }, {
        "Name": "Sack",
        "GameStatValue": 6.5
      }, {
        "Name": "Forced Fumble",
        "GameStatValue": 1
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 11
      }, {
        "Name": "QB Hit",
        "GameStatValue": 16
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 45.5
      }, {
        "Name": "2+ Sacks Bonus",
        "GameStatValue": 1
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Frank Zombo",
      "PlayerPos": "LB",
      "TeamAbbr": "KC",
      "Stats": [{
        "Name": "Assisted Tackles",
        "GameStatValue": 17
      }, {
        "Name": "Sack",
        "GameStatValue": 1.5
      }, {
        "Name": "Fumbles Recovery",
        "GameStatValue": 1
      }, {
        "Name": "Tackles for Loss Bonus",
        "GameStatValue": 4
      }, {
        "Name": "QB Hit",
        "GameStatValue": 5
      }, {
        "Name": "Sack Yards",
        "GameStatValue": 8
      }, {
        "Name": "Games Played",
        "GameStatValue": 14
      }]
    }, {
      "PlayerName": "Greg Zuerlein",
      "PlayerPos": "K",
      "TeamAbbr": "LA",
      "Stats": [{
        "Name": "PAT Missed",
        "GameStatValue": 2
      }, {
        "Name": "FG Made 0-19",
        "GameStatValue": 1
      }, {
        "Name": "FG Made 20-29",
        "GameStatValue": 8
      }, {
        "Name": "FG Made 30-39",
        "GameStatValue": 11
      }, {
        "Name": "FG Made 40-49",
        "GameStatValue": 12
      }, {
        "Name": "FG Made 50+",
        "GameStatValue": 6
      }, {
        "Name": "FG Missed 30-39",
        "GameStatValue": 1
      }, {
        "Name": "FG Missed 50+",
        "GameStatValue": 1
      }]
    }]`);
  }



}

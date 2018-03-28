import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import * as stats from '../../../assets/AllStats.json';
import * as scores from '../../../assets/Scores.json';

@Component({
    selector: 'app-scoring-leaders-page',
    templateUrl: './scoring-leaders-page.component.html',
    styleUrls: ['./scoring-leaders-page.component.css']
})
export class ScoringLeadersPageComponent implements OnInit {

    allStats = (<any>stats);
    allScores = (<any>scores);

    filteredPlayerPos = 'All';
    filteredTeamName = 'All';

    offensivePlayers = [];
    scoreOffensivePlayer = [];
    filteredOffensivePlayers = [];
    filteredOffensiveScore = [];

    defensivePlayer = [];
    scoreDefensivePlayer = [];
    filteredDefensivePlayers = [];
    filteredDefensiveScore = [];

    kickers = [];
    scoreKickers = [];
    filteredKickerPlayers = [];
    filteredKickerScore = [];

    playerPos = ['All', 'DEF', 'K', 'QB', 'RB', 'TE', 'WR'];
    selectedPlayerPos = this.playerPos[0];
    teams = ['All', 'ARI', 'ATL', 'BAL', 'BUF', 'CAR',
        'CHI', 'CIN', 'CLE', 'DAL', 'DEN', 'DET', 'GB',
        'HOU', 'IND', 'JAX', 'KC', 'LAC', 'LA', 'MIA',
        'MIN', 'NE', 'NO', 'NYG', 'NYJ', 'OAK', 'PHI', 'PIT', 'SEA', 'SF', 'TB', 'TEN', 'WAS'];


    constructor() { }

    ngOnInit() {
        this.fillTableForAll();
    }

    fillTableForAll() {
        var i = 0;
        this.allStats.forEach(e => {
            switch (e.PlayerPos) {
                case 'K':
                    this.kickers.push(e);
                    break;
                case 'QB':
                case 'RB':
                case 'WR':
                case 'TE':
                    i++;
                    if(i < 50)
                    {
                        this.offensivePlayers.push(e);
                    }
                    break;
                case 'DEF':
                    this.defensivePlayer.push(e);
                    break;
                default:
                    break;
            }
        });

        var j = 0;
        this.allScores.forEach(e => {
            switch (e.PlayerPos) {
                case 'K':
                    this.scoreKickers.push(e);
                    break;
                case 'QB':
                case 'RB':
                case 'WR':
                case 'TE':
                    j++;
                    if(j < 50)
                    {
                        this.scoreOffensivePlayer.push(e);
                    }
                    break;
                case 'DEF':
                    this.scoreDefensivePlayer.push(e);
                    break;
                default:
                    break;
            }
        });

        this.filteredOffensivePlayers = this.offensivePlayers;
        this.filteredOffensiveScore = this.scoreOffensivePlayer;

        this.filteredDefensivePlayers = this.defensivePlayer;
        this.filteredDefensiveScore = this.scoreDefensivePlayer;

        this.filteredKickerPlayers = this.kickers;
        this.filteredKickerScore = this.scoreKickers;
    }

    onTeamChange(team) {
        this.onSelectionChange(team, this.filteredPlayerPos);
    }

    onPlayerPositionChange(player) {
        this.onSelectionChange(this.filteredTeamName, player);
    }

    onSelectionChange(teamName, playerPosition) {
        this.filteredTeamName = teamName;
        this.filteredPlayerPos = playerPosition;

        if (this.filteredTeamName === 'All' && this.filteredPlayerPos === 'All') {

            this.filteredOffensivePlayers = this.offensivePlayers;
            this.filteredOffensiveScore = this.scoreOffensivePlayer;

            this.filteredDefensivePlayers = this.defensivePlayer;
            this.filteredDefensiveScore = this.scoreDefensivePlayer;

            this.filteredKickerPlayers = this.kickers;
            this.filteredKickerScore = this.scoreKickers;

        } else if (this.filteredTeamName !== 'All' && this.filteredPlayerPos === 'All') {

            this.filteredOffensivePlayers = this.offensivePlayers.filter(e => e.TeamAbbr === this.filteredTeamName);
            this.filteredOffensiveScore = this.scoreOffensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName);

            this.filteredDefensivePlayers = this.defensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName);
            this.filteredDefensiveScore = this.scoreDefensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName);

            this.filteredKickerPlayers = this.kickers.filter(e => e.TeamAbbr === this.filteredTeamName);
            this.filteredKickerScore = this.scoreKickers.filter(e => e.TeamAbbr === this.filteredTeamName);

        } else if (this.filteredTeamName === 'All' && this.filteredPlayerPos !== 'All') {

            this.filteredOffensivePlayers = this.offensivePlayers.filter(e => e.PlayerPos === this.filteredPlayerPos);
            this.filteredOffensiveScore = this.scoreOffensivePlayer.filter(e => e.PlayerPos === this.filteredPlayerPos);

            this.filteredDefensivePlayers = this.defensivePlayer.filter(e => e.PlayerPos === this.filteredPlayerPos);
            this.filteredDefensiveScore = this.scoreDefensivePlayer.filter(e => e.PlayerPos === this.filteredPlayerPos);

            this.filteredKickerPlayers = this.kickers.filter(e => e.PlayerPos === this.filteredPlayerPos);
            this.filteredKickerScore = this.scoreKickers.filter(e => e.PlayerPos === this.filteredPlayerPos);

        } else {

            this.filteredOffensivePlayers = this.offensivePlayers.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);
            this.filteredOffensiveScore = this.scoreOffensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);

            this.filteredDefensivePlayers = this.defensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);
            this.filteredDefensiveScore = this.scoreDefensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);

            this.filteredKickerPlayers = this.kickers.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);
            this.filteredKickerScore = this.scoreKickers.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);
        }
    }

}

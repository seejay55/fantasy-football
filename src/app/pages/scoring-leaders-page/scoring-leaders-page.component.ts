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

    allOffensivePlayers = [];

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

    playerPos = ['All', 'QB', 'RB', 'TE', 'WR', 'DEF', 'K'];
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
        let i = 0;
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
                    if (i < 50) {
                        this.offensivePlayers.push(e);
                    }
                    this.allOffensivePlayers.push(e);
                    break;
                case 'DEF':
                    this.defensivePlayer.push(e);
                    break;
                default:
                    break;
            }
        });

        this.filteredOffensivePlayers = this.offensivePlayers;

        this.filteredDefensivePlayers = this.defensivePlayer;

        this.filteredKickerPlayers = this.kickers;
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

            this.filteredDefensivePlayers = this.defensivePlayer;

            this.filteredKickerPlayers = this.kickers;

        } else if (this.filteredTeamName !== 'All' && this.filteredPlayerPos === 'All') {

            this.filteredOffensivePlayers = this.allOffensivePlayers.filter(e => e.TeamAbbr === this.filteredTeamName);

            this.filteredDefensivePlayers = this.defensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName);

            this.filteredKickerPlayers = this.kickers.filter(e => e.TeamAbbr === this.filteredTeamName);

        } else if (this.filteredTeamName === 'All' && this.filteredPlayerPos !== 'All') {

            this.filteredOffensivePlayers = this.allOffensivePlayers.filter(e => e.PlayerPos === this.filteredPlayerPos);

            this.filteredDefensivePlayers = this.defensivePlayer.filter(e => e.PlayerPos === this.filteredPlayerPos);

            this.filteredKickerPlayers = this.kickers.filter(e => e.PlayerPos === this.filteredPlayerPos);

        } else {

            this.filteredOffensivePlayers = this.allOffensivePlayers.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);

            this.filteredDefensivePlayers = this.defensivePlayer.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);

            this.filteredKickerPlayers = this.kickers.filter(e => e.TeamAbbr === this.filteredTeamName
                && e.PlayerPos === this.filteredPlayerPos);
        }
    }

}

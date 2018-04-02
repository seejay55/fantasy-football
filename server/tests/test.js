/**
 * Tests
 * To compile run:
 * aglio --theme-variables slate -i ../apiary.apibp -o [output file].html
 */

let server = require('../server');
let req = require('supertest')(server);
let assert = require('assert');

describe("User Collection [/users]", () => {
    describe("Get User List", () =>
    describe(`Get array of all users`, () => {
        it("gets user list successfully", () => {
            return req
                .get('/api/users')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assert(response.body.length > 0);
                    assertObjectHasProperties(
                        response.body[0], 
                        ['ID', 'Username', 'ProfilePic', 'FirstName', 'LastName', 'FavoriteTeam']
                    );
                    return response;
                })
        });
    })
    );

    describe("Create User", () =>
    describe(`creates a user with specified information (ID optional)`, () => {
        it("creates a user", () => {
            return req
                .post('/api/users')
                .send({
                    "ID": 8,
                    "Email":"email@delete.me",
                    "Password":"delete",
                    "Username":"delete_me",
                    "FirstName":"DELETE",
                    "LastName":"ME"
                })
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assert(response.body.length > 0);
                    assertObjectHasProperties(
                        response.body[0], 
                        ['ID', 'Email', 'Username', 'ProfilePic', 'FirstName', 'LastName', 'FavoriteTeam']
                    );
                    return response;
                })
        });
    })
    );
});

describe("User [/user]", () => {
    describe("Get User", () =>
    describe(`Get user by ID or Username`, () => {
        it("gets user successfully by id", () => {
            return req
                .get('/api/user/1')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assertObjectHasProperties(
                        response.body[0], 
                        ['ID', 'Username', 'ProfilePic', 'FirstName', 'LastName', 'FavoriteTeam']
                    );
                    assert.equal(
                        response.body[0].ID,
                        1,
                        'Couldn\'t get user with id: 1'
                    );
                    return response;
                })
        });

        it("gets user successfully by username", () => {
            return req
                .get('/api/user/test1')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assertObjectHasProperties(
                        response.body[0], 
                        ['ID', 'Username', 'ProfilePic', 'FirstName', 'LastName', 'FavoriteTeam']
                    );
                    assert.equal(
                        response.body[0].Username,
                        'test1',
                        'Couldn\'t get user with username: test1'
                    );
                    return response;
                })
        });

        it("cannot find user with id", () => {
            return req
                .get('/api/user/-1')
                .set('Accept', 'text/html')
                .expect(500)
                .then(response => {
                    assert.equal(
                        response.text,
                        'No user exists with ID: -1',
                        'Couldn\'t get user with ID: -1'
                    );
                    return response;
                })
        });

        it("cannot find user with username", () => {
            return req
                .get('/api/user/NonExistantUser')
                .set('Accept', 'text/html')
                .expect(500)
                .then(response => {
                    assert.equal(
                        response.text,
                        'No user exists with Username: NonExistantUser',
                        'Couldn\'t get user with username: NonExistantUser'
                    );
                    return response;
                })
        });
    })
    );
    
    describe("Authenticate User", () =>
    describe(`Authenticate a user and return user info`, () => {
        it("gets user list successfully", () => {
            return req
                .get('/api/user/authenticate')
                .set('Email', 'test1')
                .set('Password', 'test')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assertObjectHasProperties(
                        response.body, 
                        ['_id', 'email', 'userName', 'firstName', 'lastName']
                    );
                    return response;
                })
        });
    })
    );
    
    describe("Delete User", () =>
    describe(`Delete a user with a given ID`, () => {
        it("deletes user successfully", () => {
            return req
                .delete('/api/user/8')
                .expect(204)
        });
    })
    );
    
});

describe("League Collection [/leagues]", () => {
    describe("Get League List", () =>
    describe(`Get array of all leagues`, () => {
        it("gets league list successfully", () => {
            return req
                .get('/api/leagues')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assert(response.body.length > 0);
                    assertObjectHasProperties(
                        response.body[0], 
                        ['ID', 'Name', 'Year', 'MaxTeams', 'TypeScoring', 'LeaguePrivacy', 'MaxTrades', 'NumTeams', 'OwnerID', 'OwnerUserName']
                    );
                    return response;
                })
        });
    })
    );
});

describe("Leagues [/league]", () => {
    describe("Get League by ID", () =>
    describe(`Get information about a league`, () => {
        it("gets league successfully by ID", () => {
            return req
                .get('/api/league/1')
                .set('Accept', 'application/json')
                .expect(200)
                .then(response => {
                    assert(response.body.length > 0);
                    assert(response.body[0].ID === 1);
                    assertObjectHasProperties(
                        response.body[0], 
                        ['ID', 'Name', 'Year', 'MaxTeams', 'TypeScoring', 'LeaguePrivacy', 'MaxTrades', 'NumTeams', 'OwnerID', 'OwnerUserName']
                    );
                    return response;
                })
        });
    })
    );
});

/* // Helper Functions ////////////////////////////////////////////////////////////////////////////////////////////// */

function assertObjectHasProperties(object, properties) {
    properties.forEach(property => {
        assert(object.hasOwnProperty(property), 'Missing property: '+property);
    });
}
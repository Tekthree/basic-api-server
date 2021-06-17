"use strict";

const server = require("../src/server.js");
const data = require("../src/models/index.js");
const supertest = require("supertest");

const request = supertest(server.app);

beforeAll(async () => {
    await data.db.sync();
});
afterAll(async () => {
    await data.db.drop();
});

describe("testing the server", () => {

    
     //----------------------- dogs routes test --------------------------//

    test("testing a 200 for GET `/dogs`", async () => {
        const response = await request.get("/dogs");
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });

    test("testing a 200 for POST `/dogs`", async () => {
        const response = await request.post("/dogs").send({
            breed: "test",
            age: 17,
        });

        expect(response.status).toEqual(200);
        expect(response.body.breed).toEqual("test");
    });

    test("testing a 200 for GET `/dogs/:dogsId`", async () => {
        const response = await request.get(`/dogs/1`);

        expect(response.status).toEqual(200);
        expect(response.body.breed).toEqual("test");
    });

    test("testing a 200 for PUT `/dogs/:dogsId`", async () => {
        const response = await request.put("/dogs/1").send({
            breed: "new test",
        });

        expect(response.status).toEqual(200);
        expect(response.body.breed).toEqual("new test");
    });

    test("testing a 200 for DELETE `/dogs/:dogsId`", async () => {
        const response = await request.delete("/dogs/1");
        expect(response.status).toEqual(204);
    });


    //----------------------- songs routes test --------------------------//

    test("testing a 200 for GET `/songs`", async () => {
        const response = await request.get("/songs");
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });

    test("testing a 200 for POST `/songs`", async () => {
        const response = await request.post("/songs").send({
            name: "test",
            year: 17,
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("test");
    });

    test("testing a 200 for GET `/songs/:songsId`", async () => {
        const response = await request.get(`/songs/1`);

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("test");
    });

    // test("testing a 200 for PUT `/songs/:songsId`", async () => {
    //     const response = await request.put("/songs/1").send({
    //         name: "new test",
    //     });

    //     expect(response.status).toEqual(200);
    //     expect(response.body.name).toEqual("new test");
    // }, 30000);

    test("testing a 200 for DELETE `/songs/:songsId`", async () => {
        const response = await request.delete("/songs/1");
        expect(response.status).toEqual(204);
    });
});

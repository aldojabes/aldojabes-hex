import supertest from "supertest";

import { app } from "../index.js";

test('POST call', async()=>{
    var request = {operand1: 1,operand2: 2,operation: "+"}
    await api
        .post('/')
        .send(request)
        .expect(201)
})
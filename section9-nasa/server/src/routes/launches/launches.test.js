const request = require('supertest')
const app = require('../../app')

describe("Test GET /launches", () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe("Test POST /launches", () => {

    const launchData = {
        mission: 'test',
        rocket: 'rocketname',
        target: 'madrid',
        launchDate: "March 1, 2024"
    }

    const launchDataWithoutDate = {
        mission: 'test',
        rocket: 'rocketname',
        target:'madrid',
    }

    test('It should respond with 201 created', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launchData)
        .expect('Content-Type', /json/)
        .expect(201)
        
        const requestDate = new Date(launchData.launchDate).valueOf
        const responseDate = new Date(response.body.launchDate).valueOf
        expect(responseDate).toBe(requestDate)

        //To check the body use hest assertions
        expect(response.body).toMatchObject(launchDataWithoutDate)
    })
    test('It should catch missing requires properties', () => {
        
    })
    test('It should catch invalid dates', () => {
        
    })
})
const request = require('supertest');
const server = require('../app.js');

beforeAll(async () => {
   console.log('Starting TDD with jest!');
});


afterAll(() => {
    server.close();
    console.log('Close server');
});


describe('Start tests', () => {
    it('testing create hobbies', async () => {
        const response = await request(server).post('/api/create-hobbie')
        .send({
            name: "teste4",
            experienceLevel: "medium",
            year: "2020"
        });
        expect(response.statusCode.toEqual(200));
        expect(response.body).toHaveProperty('post')
    })

    it('testing create hobbies', async () => {
        const response = await request(server).put('/api/update-hobbie/612e8845f0847745e36f7d8e')
        .send({
            name: "teste4",
            experienceLevel: "high",
            year: "2020"
        });
        expect(response.statusCode.toEqual(200));
    })

    it('testing read hobbies', async () => {      
        const response = await request(server).get('/api/read-hobbies');      
        expect(response.statusCode.toEqual(200));
    });
});
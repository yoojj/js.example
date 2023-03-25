import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import { app, server } from '../app'



describe('GET /', () => {

    afterAll(async () => {
        await server.close();
    });

    it('index test', (done) => {
        request(app).get('/').expect(StatusCodes.OK, done);
    });

});
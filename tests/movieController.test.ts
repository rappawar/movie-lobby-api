import request from 'supertest';
import app from '../src/app';

describe('Movie API Endpoints', () => {
  it('should get all movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

});
const request = require('supertest');
const app = require('../app');


test('POST /courses debe crear un curso', async () => {
  const course = {
    name: "Programación",
    credits: 5,
  }
  const res = await request(app).post('/courses').send(course);
  expect(res.status).toBe(201);
  expect(res.body).toMatchObject(course);
  expect(res.body.id).toBeDefined();
});

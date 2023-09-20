const app = require('../app');
const request = require('supertest');

let id;

test("GET /students debe traer todos los estudiantes", async () => {
  const res = await request(app).get('/students');
  expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});

test('POST /students debe crear un estudiante', async () => {
  const student = {
    name: "Helson Tafur",
    program: "Ingeniería informática",
    birthday: "1995-10-10",
  }
  const res = await request(app).post("/students").send(student);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
  expect(res.body.name).toBe(student.name);
});

test('PUT /students/:id debe actualizar un estudiante', async () => {
  const studentUpdated = {
    name: "Helson updated"
  }
  const res = await request(app)
    .put(`/students/${id}`)
    .send(studentUpdated);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(studentUpdated.name);
});

test('DELETE /students/:id debe eliminar un estudiante', async () => {
  const res = await request(app).delete(`/students/${id}`);
  expect(res.status).toBe(204);
});

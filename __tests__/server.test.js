'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('WEB SERVER', () => {
  it('should respond with 404 on bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on bad method', async () => {
    const response = await request.put('/foo');
    expect(response.status).toBe(404);
  });
});

describe('CLOTHES ROUTES', () => {
  it('should create a new item in db', async () => {
    const response = await request.post('/clothes').send({ item: 'test' });
    expect(response.status).toBe(201);
    expect(response.body.record.item).toEqual('test');
  });

  it('should retrieve an item from the db', async () => {
    const response = await request.get('/clothes/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('should update a record in the db', async () => {
    const response = await request
      .put('/clothes/1')
      .send({ update: 'updateTest' });
    expect(response.status).toBe(200);
    expect(response.body.record.update).toEqual('updateTest');
  });

  it('should delete a record in the db', async () => {
    const response = await request.delete('/clothes/1');
    expect(response.status).toBe(200);
    expect(response.body.record.update).toEqual('updateTest');
  });
});

describe('FOODS ROUTES', () => {
  it('should create a new item in db', async () => {
    const response = await request.post('/foods').send({ item: 'test' });
    expect(response.status).toBe(201);
    expect(response.body.record.item).toEqual('test');
  });

  it('should retrieve an item from the db', async () => {
    const response = await request.get('/foods/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await request.get('/foods');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it('should update a record in the db', async () => {
    const response = await request
      .put('/foods/1')
      .send({ update: 'updateTest' });
    expect(response.status).toBe(200);
    expect(response.body.record.update).toEqual('updateTest');
  });

  it('should delete a record in the db', async () => {
    const response = await request.delete('/foods/1');
    expect(response.status).toBe(200);
    expect(response.body.record.update).toEqual('updateTest');
  });
});

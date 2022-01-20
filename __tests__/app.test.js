const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-refactory routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to list orders', async () => {
    const res = await request(app).get('/api/v1/orders');

    expect(res.body).toEqual([
      {
        id: expect.any(String),
        quantity: 1,
        product: 'Widget',
      },
    ]);
  });
});

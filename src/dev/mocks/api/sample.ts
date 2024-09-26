import { rest } from 'msw';

const TEST_URL = 'http://localhost:3000';

const getSample = rest.get(`${TEST_URL}/test`, async (req, res, ctx) => {
  // TODO
  console.log({ req, res, ctx });

  return res(
    ctx.status(200),
    ctx.set('Content-Type', 'application/json'),
    ctx.json({ sample: 'OK' })
  );
});

const apis = [getSample];

export default apis;

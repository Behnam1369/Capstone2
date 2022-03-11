import counter from '../modules/itemCounter.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve({ length: 12 }),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('returns back the length of the array', () => {
  test('counter', async () => {
    const json = await counter();
    expect(json.length).toEqual(12);
  });
});
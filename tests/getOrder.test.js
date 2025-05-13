jest.mock('aws-sdk', () => {
  const DocumentClient = {
    get: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({
      Item: { id: 'test123', name: 'Cappuccino' }
    })
  };
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => DocumentClient)
    }
  };
});

const { get } = require('../handler');

test('returns 200 when item is found', async () => {
  const event = {
    pathParameters: { id: 'test123' }
  };

  const result = await get(event);
  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body)).toEqual({ id: 'test123', name: 'Cappuccino' });
});

//  Fix starts here
test('returns 404 when item is not found', async () => {
  jest.resetModules(); // clear cache before remocking

  jest.mock('aws-sdk', () => {
    const DocumentClient = {
      get: jest.fn().mockReturnThis(),
      promise: jest.fn().mockResolvedValue({}) // simulate no item
    };
    return {
      DynamoDB: {
        DocumentClient: jest.fn(() => DocumentClient)
      }
    };
  });

  const { get } = require('../handler'); // re-import after remock

  const event = {
    pathParameters: { id: 'nonexistent' }
  };

  const result = await get(event);

  expect(result.statusCode).toBe(404);
  expect(JSON.parse(result.body)).toEqual({ error: 'Item not found' });
});


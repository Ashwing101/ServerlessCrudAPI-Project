//  Mock AWS SDK for DynamoDB delete call
jest.mock('aws-sdk', () => {
  const DocumentClient = {
    delete: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({})
  };
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => DocumentClient)
    }
  };
});

//  Import the handler after mocking
const { remove } = require('../handler');

//  Test: returns 200 when item is deleted
test('returns 200 when item is deleted', async () => {
  const event = {
    pathParameters: { id: 'test123' }
  };

  const result = await remove(event);

  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body)).toEqual({ message: 'Item deleted' });
});


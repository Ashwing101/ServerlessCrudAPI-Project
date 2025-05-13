//  Mock AWS SDK for DynamoDB update call
jest.mock('aws-sdk', () => {
  const DocumentClient = {
    update: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({
      Attributes: { name: 'UpdatedName' }
    })
  };
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => DocumentClient)
    }
  };
});

// Import the update handler after mocking
const { update } = require('../handler');

// Test: returns 200 when item is successfully updated
test('returns 200 when item is updated', async () => {
  const event = {
    pathParameters: { id: 'test123' },
    body: JSON.stringify({ name: 'UpdatedName' })
  };

  const result = await update(event);

  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body).message).toBe('Item updated');
});


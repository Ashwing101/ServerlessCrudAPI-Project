jest.mock('aws-sdk', () => {
  const DocumentClient = {
    put: jest.fn().mockReturnThis(),
    promise: jest.fn().mockResolvedValue({})
  };
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => DocumentClient)
    }
  };
});

const { create } = require('../handler');

// Test case
test('returns 201 for a valid order', async () => {
  const event = {
    body: JSON.stringify({
      id: 'test123',
      name: 'Cappuccino',
      quantity: 2,
      size: 'Medium'
    })
  };

  const result = await create(event);

  expect(result.statusCode).toBe(201);
});



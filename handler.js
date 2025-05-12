'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'items';

//Changes made to check the GitAction
// Create Item using POST method
module.exports.create = async (event) => {
    try {
        const data = JSON.parse(event.body);

        const params = {
            TableName: TABLE_NAME,
            Item: {
                id: data.id,
                name: data.name
            }
        };

        await dynamoDb.put(params).promise();

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Item created', item: params.Item }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not create item', message: error.message }),
        };
    }
};

// Get Item using GET method
module.exports.get = async (event) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: { id: event.pathParameters.id }
        };

        const result = await dynamoDb.get(params).promise();

        if (!result.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Item not found' }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not fetch item', message: error.message }),
        };
    }
};

// Update the Item using PUT method
module.exports.update = async (event) => {
    try {
        const data = JSON.parse(event.body);

        const params = {
            TableName: TABLE_NAME,
            Key: { id: event.pathParameters.id },
            UpdateExpression: 'set #name = :name',
            ExpressionAttributeNames: {
                '#name': 'name'
            },
            ExpressionAttributeValues: {
                ':name': data.name
            },
            ReturnValues: 'UPDATED_NEW'
        };

        const result = await dynamoDb.update(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item updated', result }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not update item', message: error.message }),
        };
    }
};

// Delete Item using DELETE Method
module.exports.remove = async (event) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: { id: event.pathParameters.id }
        };

        await dynamoDb.delete(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Item deleted' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not delete item', message: error.message }),
        };
    }
};


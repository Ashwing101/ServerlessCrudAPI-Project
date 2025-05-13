# ☕️ Serverless Coffee Order API

This project implements a real-world coffee shop ordering system using a fully serverless architecture. Built with AWS Lambda, API Gateway, DynamoDB, and the Serverless Framework, it supports full Create, Read, Update, and Delete operations for coffee orders.

---

## 🛠️ Features

- Use case: Coffee Shop – Place, view, update, or cancel coffee orders
- `POST /orders` → Create a new coffee order
- `GET /orders/{id}` → Retrieve an order by ID
- `PUT /orders/{id}` → Update an existing order
- `DELETE /orders/{id}` → Cancel/delete an order
- Easy deployment using `serverless deploy --stage <dev|prod>`
- Fully tested with Postman and `curl`

---

📦 **Tech Stack**
AWS Lambda – Serverless compute
Amazon API Gateway – RESTful HTTP access
Amazon DynamoDB – NoSQL storage
Serverless Framework – Infrastructure as Code (IaC)
Node.js – Backend language
GitHub Actions – CI/CD pipeline

---

🚀 **CI/CD & Deployment**
Multi-stage deployments: dev and prod
GitHub Actions triggers deployment on push
All infrastructure defined in serverless.yml

---


## 📸 Screenshots

Screenshots are located in the Screenshot/ folder. These images show the AWS services (Lambda, API Gateway, DynamoDB) used and how they were configured during this project.

### Lambda Function  
[Lambda](./Screenshot/LambdaFun-1.png)
[Lambda](./Screenshot/LambdaFun-2.png)

### API Gateway  
[API Gateway](./Screenshot/ApiGateway.png)

### DynamoDB Table  
[DynamoDB](./Screenshot/DynamoDb-1.png)
[DynamoDB](./Screenshot/DynamoDb-2.png)

## 📸 Postman Testing

Here are test results for all CRUD operations using Postman:
- [Create Order](./Screenshot/Postman-PostOrder.png)
- [Get Order](./Screenshot/Postman-GetOrder.png)
- [Update Order](./Screenshot/Postman-UpdateOrder.png)
- [Delete Order](./Screenshot/Postman-DeleteOrder.png)

---

## 📬 Postman Collection

ℹ️ Note: The API was tested in the `prod` stage. The same logic applies to the `dev` stage since stage-based deployments are handled via Serverless Framework.


I’ve created a separate Postman collection that includes all CRUD operations (Create, Read, Update, Delete) for easy testing of the API.

You can test all endpoints using the included collection:

📁 [ServerLessCrudAPI.postman_collection.json](./ServerLessCrudAPI.postman_collection.json)


How To use:
1. Open Postman
2. Click **Import**
3. Select the JSON file to load all API requests

---

🧪 **Testing Support (Unit & Integration)** –  
The project is structured to support unit and integration testing using frameworks like Jest. Handlers are modular, enabling isolated testing of each function such as `createOrder`, `getOrder`, etc.



## 🧪 Unit Testing

All Lambda functions are covered with unit tests using Jest. AWS SDK calls (DynamoDB) are fully mocked, and all scenarios (success and error) are tested.

📁 Test files:
- createOrder.test.js
- getOrder.test.js
- updateOrder.test.js
- deleteOrder.test.js

✅ Run tests using:

bash
npm test

---

### 🧪 Unit Test Results

All CRUD operations were tested using Jest with mocked AWS services.  
Tests include valid and invalid request handling.

[Test Results](./Screenshot/TestResults.png)

---

## 📁 Folder Structure

ServerlessCrudAPI-Project/
├── handler.js
├── serverless.yml
├── package.json
├── .gitignore
├── README.md
├── Screenshot/
│   ├── ApiGateway.png
│   ├── LambdaFun-1.png
│   ├── DynamoDb-1.png
│   ├── Postman-PostOrder.png
│   └── TestResults.png
├── ServerLessCrudAPI.postman_collection.json
└── tests/
    ├── createOrder.test.js
    ├── getOrder.test.js
    ├── updateOrder.test.js
    └── deleteOrder.test.js

---

## 🧪 Advanced Project Highlights

- Business-case focused: Coffee Shop Orders API
- Stage-based deployments (`dev`, `prod`) via `--stage`
- Postman collection & screenshots
- Modular, testable architecture (ready for packaging)
- CI/CD via GitHub Actions


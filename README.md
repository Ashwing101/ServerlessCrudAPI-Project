# 🚀 Serverless CRUD API Project

This is a simple and scalable **Serverless CRUD API** built using **AWS Lambda**, **API Gateway**, and **DynamoDB**, all managed through the **Serverless Framework**. 
It supports full Create, Read, Update, and Delete operations and includes optional CI/CD setup using GitHub Actions.

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

I’ve created a separate Postman collection that includes all CRUD operations (Create, Read, Update, Delete) for easy testing of the API.

You can test all endpoints using the included collection:

📁 [ServerLessCrudAPI_postman_collection.json](./ServerLessCrudAPI_postman_collection.json)


How To use:
1. Open Postman
2. Click **Import**
3. Select the JSON file to load all API requests

---

## 📦 Tech Stack

- **AWS Lambda** – for serverless compute
- **Amazon API Gateway** – to expose HTTP endpoints
- **Amazon DynamoDB** – for NoSQL storage
- **Serverless Framework** – to manage infrastructure
- **Node.js** – backend language
- **GitHub Actions** – (optional) automated CI/CD

---

## 🛠️ Features

- `POST /orders` → Create a new coffee order
- `GET /orders/{id}` → Retrieve an order by ID
- `PUT /orders/{id}` → Update an existing order
- `DELETE /orders/{id}` → Cancel/delete an order
- Easy deployment using `serverless deploy --stage <dev|prod>`
- Fully tested with Postman and `curl`


---

## 📁 Folder Structure

ServerlessCrudAPI-Project/

├── handler.js                            
├── serverless.yml                        
├── package.json                         
├── .gitignore                           
├── README.md                            
├── Screenshot/                          
├── ServerLessCrudAPI-postman_collection.json


# trigger

# ☕️ Serverless Coffee Order API

This project implements a **real-world coffee shop ordering system** using a fully serverless architecture. Built with **AWS Lambda**, **API Gateway**, **DynamoDB**, and the **Serverless Framework**, it supports full Create, Read, Update, and Delete operations for coffee orders.

It also includes:
- Stage-aware multi-environment deployments (`dev`, `prod`)
- Automated CI/CD via GitHub Actions
- Infrastructure-as-code (IaC) management
- Postman test suite and request collection

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

## 📦 Tech Stack

- **AWS Lambda** – for serverless compute
- **Amazon API Gateway** – to expose HTTP endpoints
- **Amazon DynamoDB** – for NoSQL storage
- **Serverless Framework** – to manage infrastructure
- **Node.js** – backend language
- **GitHub Actions** – (optional) automated CI/CD

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

## 📁 Folder Structure

ServerlessCrudAPI-Project/

├── handler.js                            
├── serverless.yml                        
├── package.json                         
├── .gitignore                           
├── README.md                            
├── Screenshot/                          
├── ServerLessCrudAPI-postman_collection.json


---

## 🧪 Advanced Project Highlights

- Business-case focused: Coffee Shop Orders API
- Stage-based deployments (`dev`, `prod`) via `--stage`
- Postman collection & screenshots
- Modular, testable architecture (ready for packaging)
- CI/CD via GitHub Actions


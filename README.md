# QA Project: Swagger Petstore API Testing

This repository contains the end-to-end API testing strategy, manual test scenarios, automated test suites, and bug documentation for the **Swagger Petstore API (V2)**.

## 📌 Project Overview
This project showcases a complete Quality Assurance lifecycle for backend APIs, combining manual exploratory analysis with automated end-to-end testing in **Postman** to ensure service reliability, data integrity, and strict adherence to REST API specifications.

---

## 📑 Test Scenarios & Scope

### 🟢 1. Manual & Exploratory Testing
Focused on functional validation, boundary analysis, and negative test case execution against the Swagger Petstore V2 specification:
- **Pet Module:** Creating, updating, fetching by status, and deleting pets, including negative payload validations.
- **Store Module:** Order placement, inventory tracking, and order deletion workflows.
- **User Module:** User registration, authentication flows, profile updates, and account deletion.

### 🤖 2. Automated API Test Suite (Postman)
End-to-end automated regression suite built with **Postman** and **JavaScript**, designed to run sequentially via the **Postman Collection Runner**):
- **Dynamic State & Data Chaining:** Automated generation and persistence of dynamic variables (`petId`, `orderId`, `username`) across `POST`, `GET`, `PUT`, and `DELETE` requests using `pm.environment.set()`.
- **Automated Assertions:** Custom test scripts (`pm.test` / `pm.expect`) validating HTTP status codes, JSON response structures, data types, and business rules.
- **Public API Resilience:** Built-in conditional assertions to gracefully handle known public sandbox behaviors and state resets (`200 OK` vs. `404 Not Found`).

---

## 🛠️ Tech Stack & Tools
- **API Testing & Automation:** Postman (JavaScript / Chai Assertions)
- **Test Runner:** Postman Collection Runner
- **Test Management & Docs:** Google Sheets, Google Docs, GitHub Markdown
- **Target Service:** Swagger Petstore (V2 REST API)

---

## 📁 Documentation & Test Artifacts
- 📄 **[Manual Test Cases Spreadsheet](https://docs.google.com/spreadsheets/d/1l2ziAWQHhpjzenyjrOr2Zx9cXYHiD3z09zn6W2QeUak/edit?usp=sharing)** — Detailed scenarios, expected vs. actual outcomes, and execution status..
- 📄 **[Full Test Execution & Blockers Report](https://docs.google.com/document/d/1aiBCo75UyfQQANl3tjjz-taqyHvxMfNw2ZaJtELB7L8/edit?usp=sharing)** — Detailed Google Doc with execution summaries and risk logs.
- 🚀 **Postman Collection & Environment:** Ready-to-import JSON files ([Collection](https://github.com/paulagranadoqa/swagger-petstore-api-testing/blob/main/postman/SwaggerPetstore.postman_collection.json) and [Environment](https://github.com/paulagranadoqa/swagger-petstore-api-testing/blob/main/postman/SwaggerPetstore.postman_environment.json)) included in `/postman`.

---

## 🐛 Bug Reports & Issue Tracking
All failed test cases and unexpected API behaviors identified during execution were logged with step-by-step reproduction instructions and evidence directly in [GitHub Issues](https://github.com/paulagranadoqa/swagger-petstore-api-testing/issues):

**Key Tracked Issues:**
- [`#1`](https://github.com/paulagranadoqa/swagger-petstore-api-testing/issues/1) - **[NegativeTC07] [Pet Creation]** API returns `200 OK` for missing `'name'` field instead of `400 Bad Request`
- [`#2`](https://github.com/paulagranadoqa/swagger-petstore-api-testing/issues/2) - **[NegativeTC12] [Pet Creation]** API returns generic `400 Bad Request` instead of `409 Conflict` for duplicate ID
- [`#3`](https://github.com/paulagranadoqa/swagger-petstore-api-testing/issues/3) - **[NegativeTC15] [Order Management]** `GET /store/order/{orderId}` returns `404 Not Found` for newly created order
- [`#4`](https://github.com/paulagranadoqa/swagger-petstore-api-testing/issues/4) - **[NegativeTC24] [User Login]** API returns `200 OK` on login attempt with invalid password
- [`#5`](https://github.com/paulagranadoqa/swagger-petstore-api-testing/issues/5) - **[NegativeTC26] [User Creation]** API allows duplicate usernames and returns alternating records on lookup

---

## 🚀 Setup & Installation

To run the automated test suite locally:

## 🚀 Setup & Installation

To run the automated test suite locally:

### 1. Clone the repository
```bash
git clone [https://github.com/paulagranadoqa/swagger-petstore-api-testing.git](https://github.com/paulagranadoqa/swagger-petstore-api-testing.git)
cd swagger-petstore-api-testing
```
### 2. Running the Swagger Petstore Suite (Postman)
1. Open **Postman** and click **Import**.
2. Select the Collection JSON file (and the Environment JSON file, if applicable) located inside the `/postman` folder.
3. Select the imported environment in the top-right dropdown menu.
4. Click on the collection's three dots (`...`) -> **Run collection** to execute the entire automated suite sequentially via the **Collection Runner**.

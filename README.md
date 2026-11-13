# QA Project: Swagger Petstore API Testing

This repository contains the end-to-end API testing strategy, manual test scenarios, automated test suites, and bug documentation for the **Swagger Petstore API (V2)**.

## 📌 Project Overview
This project showcases a complete Quality Assurance lifecycle for backend APIs, combining manual exploratory analysis with automated end-to-end testing in **Postman** to ensure service reliability, data integrity, and strict adherence to REST API specifications.

---

## 📑 Test Scenarios & Scope

### 🟢 Swagger Petstore API (Manual & Automated Testing)
Focused on full CRUD operations, dynamic state management, data validation, and automated assertion scripts using **Postman**.
- **Pet Module:** End-to-end lifecycle (`POST`, `GET`, `PUT`, `DELETE`), fetching pets by status, and dynamic ID chaining across requests.
- **Store Module:** Order placement, inventory tracking, cross-reference validation, and order deletion.
- **User Module:** Complete user lifecycle management (creation, session authentication/login, profile retrieval, updates, and deletion).
- **Automated Assertions & Resilience:** JavaScript test scripts (`pm.test` / `pm.expect`) validating HTTP status codes, response payloads, schema integrity, and edge-case handling (`200 OK`, `400 Bad Request`, `404 Not Found`) for public API stability.

---

## 🛠️ Tech Stack & Tools
- **API Testing & Automation:** Postman (JavaScript / Chai Assertions)
- **CLI & Runners:** Postman Collection Runner, Newman
- **Test Management & Docs:** Google Sheets, Google Docs, GitHub Markdown
- **Target Service:** Swagger Petstore (V2 REST API)

---

## 📁 Documentation & Test Artifacts
- 📄 **[Manual Test Cases Spreadsheet](https://docs.google.com/spreadsheets/d/1l2ziAWQHhpjzenyjrOr2Zx9cXYHiD3z09zn6W2QeUak/edit?usp=sharing)** — Detailed scenarios, expected vs. actual outcomes, and execution status..
- 📄 **[Full Test Execution & Blockers Report](COLE_AQUI_O_LINK_DO_GOOGLE_DOCS)** — Detailed Google Doc with execution summaries and risk logs.
- 🚀 **Postman Collection & Environment:** Ready-to-import JSON files (`Collection` and `Environment`) included in `/postman`.

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

### 1. Clone the repository
```bash
git clone [https://github.com/paulagranadoqa/swagger-petstore-api-testing.git](https://github.com/paulagranadoqa/swagger-petstore-api-testing.git)
cd swagger-petstore-api-testing

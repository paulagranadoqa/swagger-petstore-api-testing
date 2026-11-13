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
All failed test cases identified during execution were logged with step-by-step reproduction instructions and logs:
- 📄 **Bug Reports Master Document**

**Key Tracked Issues:**
- `#1` - [Login] User locked out error message is missing
- `#2` - [Checkout] Total price calculation is incorrect with tax
- `#3` - Cart badge counter not updating in real time

---

## 🚀 Setup & Installation

To run the automated test suite locally:

### 1. Clone the repository
```bash
git clone [https://github.com/seu-usuario/seu-repo.git](https://github.com/seu-usuario/seu-repo.git)
cd seu-repo





## 🐛 Bug Reports & Issue Tracking

All failed test cases identified during execution were logged with step-by-step reproduction instructions and logs:

* 📄 **[Bug Reports Master Document](COLE_AQUI_O_LINK_DO_GOOGLE_DOCS)**

### Key Tracked Issues:
* [#1 - [Login] User locked out error message is missing](https://github.com/seu-usuario/seu-repo/issues/1)
* [#2 - [Checkout] Total price calculation is incorrect with tax](https://github.com/seu-usuario/seu-repo/issues/2)
* [#3 - Cart badge counter not updating in real time](https://github.com/seu-usuario/seu-repo/issues/3)

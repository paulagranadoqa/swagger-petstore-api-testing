# 🧪 QA Project: Swagger Petstore & Stripe API Testing

This repository contains the end-to-end API testing strategy, manual test scenarios, automated test suites, and bug documentation for both the **Swagger Petstore API** and the **Stripe API**.

---

## 📌 Project Overview

This project showcases a complete Quality Assurance lifecycle for backend APIs, combining **manual exploratory analysis** with **automated end-to-end testing** to ensure service reliability, data integrity, and strict adherence to API specifications.

---

## 📑 Test Scenarios & Scope

### 🟢 1. Swagger Petstore API (Manual Testing)
Focused on full CRUD operations, data validation, and response code verification using **Postman**.
* **Pet Module:** Creating, updating, fetching by status, and deleting pets.
* **Store Module:** Order placement, inventory tracking, and order deletion.
* **User Module:** Complete user lifecycle management (creation, login, logout, and deletion).
* **Error Handling & Data Integrity:** Schema validation, status code compliance (`400 Bad Request`, `404 Not Found`).

### 🟣 2. Stripe API (Automated E2E Testing)
Automated test suite using **Cypress** covering core customer and payment flows.
* **STRP-01:** Successful creation of new customer records.
* **STRP-03:** Security and authentication validation (Verifying `401 Unauthorized` responses).
* **STRP-08:** Payment Intent creation and authorization.
* **STRP-09:** Retrieval of payment transactions.
* **STRP-12:** Data teardown and resource cleanup (Customer deletion).

---

## 🛠️ Tech Stack & Tools

* **API Testing & Automation:** Postman, Cypress (JavaScript)
* **Assertions & Structure:** Mocha, Chai
* **Test Management & Docs:** Google Sheets, Google Docs, GitHub Markdown
* **Target Services:** Swagger Petstore (V2 REST API), Stripe API

---

## 📁 Documentation & Test Artifacts

* 📄 **[Manual Test Cases Spreadsheet](https://docs.google.com/spreadsheets/d/1l2ziAWQHhpjzenyjrOr2Zx9cXYHiD3z09zn6W2QeUak/edit?usp=sharing)** — Detailed scenarios, expected vs. actual outcomes, and execution status.
* 📊 **[API Test Matrix & Coverage](COLE_AQUI_O_LINK_DO_GOOGLE_SHEETS)** — Test planning mapping for Stripe API.
* 📄 **[Full Test Execution & Blockers Report](COLE_AQUI_O_LINK_DO_GOOGLE_DOCS)** — Detailed Google Doc with execution summaries and risk logs.
* 🚀 **Postman Collection:** Ready-to-import JSON collection included in `/postman`.

---

## 🐛 Bug Reports & Issue Tracking

All failed test cases identified during execution were logged with step-by-step reproduction instructions and logs:

* 📄 **[Bug Reports Master Document](COLE_AQUI_O_LINK_DO_GOOGLE_DOCS)**

### Key Tracked Issues:
* [#1 - [Login] User locked out error message is missing](https://github.com/seu-usuario/seu-repo/issues/1)
* [#2 - [Checkout] Total price calculation is incorrect with tax](https://github.com/seu-usuario/seu-repo/issues/2)
* [#3 - Cart badge counter not updating in real time](https://github.com/seu-usuario/seu-repo/issues/3)

---

## 🚀 Setup & Installation

To run the automated tests locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repo.git](https://github.com/seu-usuario/seu-repo.git)
   cd seu-repo

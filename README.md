# QA Project: Swagger Petstore API Testing Strategy

This repository showcases the testing process and documentation for the [Swagger Petstore API](https://petstore.swagger.io/). The goal is to ensure the reliability, data integrity, and correct behavior of the backend services.

## Project Overview
I performed a comprehensive manual API testing analysis using Postman to validate request/response cycles, status codes, and business logic.

## Scopes Tested:
* **Pet Module:** Creating, updating, and deleting pets, plus filtering by status.
* **Store Module:** Placing orders, tracking inventory, and validating order deletion.
* **User Module:** User lifecycle management (creation, login, logout, and deletion).
* **Error Handling:** Validation of 400 (Bad Request) and 404 (Not Found) status codes.
* **Data Integrity:** Checking if JSON schemas match the documentation requirements.

## Documentation
All detailed test cases and API collections are organized below:
* 📄 [Manual Test Cases](https://docs.google.com/spreadsheets/d/1l2ziAWQHhpjzenyjrOr2Zx9cXYHiD3z09zn6W2QeUak/edit?usp=sharing): Detailed spreadsheet containing test scenarios, expected results, and execution status.
* 🚀 **Postman Collection:** Ready-to-import JSON file with all configured requests.

## Tech Stack & Tools
* **API Testing:** Postman
* **Test Management:** Google Sheets / Excel
* **Documentation:** GitHub Markdown
* **Environment:** Swagger Petstore (V2)
* **Automation (Future Scope):** RestAssured / Java or Cypress (API)

---


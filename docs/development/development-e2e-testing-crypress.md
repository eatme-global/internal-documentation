---
sidebar_position: 1
---

# E2E Testing with Cypress

## Table of Contents

1. [Introduction](#introduction)
2. [Setting Up the Test Environment](#setting-up-the-test-environment)
3. [Comprehensive Test Cases](#comprehensive-test-cases)
4. [Example Test Suites](#example-test-suites)
5. [Database Management for Tests](#database-management-for-tests)
6. [CI Integration](#ci-integration)
7. [Best Practices and Tips](#best-practices-and-tips)

## Introduction

This document explains the setup and usage of end-to-end (E2E) testing for a Node.js Express application using Cypress. We'll focus on CRUD operations for a single entity (e.g., discounts) as an example.

## Setting Up the Test Environment

1. Install Cypress:

   ```
   npm install --save-dev cypress
   ```

2. Set up your Cypress configuration in `cypress.json`.

3. Create test files in the `cypress/integration` directory.

## Comprehensive Test Cases

Here's a list of comprehensive E2E test cases for discount endpoints:

### GET /discounts

- Should return all discounts when the database has discounts
- Should return an empty array when there are no discounts
- Should return the correct number of discounts (pagination if implemented)
- Should return 200 status code

### GET /discounts/:id

- Should return the correct discount when a valid ID is provided
- Should return 404 when an invalid ID is provided
- Should return 400 for an incorrectly formatted ID
- Should return 200 status code for a successful request

### POST /discounts

- Should create a new discount with valid data
- Should return the created discount object
- Should return 400 for missing required fields
- Should return 400 for invalid data types
- Should return 201 status code for a successful creation

### PUT /discounts/:id

- Should update an existing discount with valid data
- Should return the updated discount object
- Should return 404 when trying to update a non-existent discount
- Should return 400 for invalid data
- Should return 200 status code for a successful update

### DELETE /discounts/:id

- Should delete an existing discount
- Should return 204 status code for a successful deletion
- Should return 404 when trying to delete a non-existent discount

### Error Handling

- Should handle and return appropriate error messages for each endpoint
- Should return 500 status code for server errors

### Authentication and Authorization (if implemented)

- Should require authentication for protected routes
- Should return 401 for unauthenticated requests
- Should return 403 for unauthorized requests

### Query Parameters (if implemented)

- Should correctly filter discounts based on query parameters
- Should correctly sort discounts based on query parameters
- Should correctly paginate results based on query parameters

### Data Validation

- Should properly validate all input fields (e.g., date formats, numeric values)
- Should handle and return appropriate error messages for validation failures

### Performance

- Should respond within an acceptable time frame for each endpoint

## Example Test Suites

Here are some example test suites using Cypress:

### POST /discounts (Creating a new discount)

```javascript
describe("POST /discounts", () => {
  it("should create a new discount with valid data", () => {
    const newDiscount = {
      name: "Summer Sale",
      code: "SUMMER2024",
      percentage: 15,
      validFrom: "2024-06-01",
      validTo: "2024-08-31",
    };

    cy.request("POST", "/api/discounts", newDiscount).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newDiscount);
      expect(response.body).to.have.property("id");
    });
  });

  it("should return 400 for missing required fields", () => {
    const invalidDiscount = {
      name: "Invalid Discount",
      // Missing other required fields
    };

    cy.request({
      method: "POST",
      url: "/api/discounts",
      body: invalidDiscount,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error).to.include("Missing required fields");
    });
  });

  // Add more test cases as needed
});
```

### PUT /discounts/:id (Updating an existing discount)

```javascript
describe('PUT /discounts/:id', () => {
  let existingDiscountId: string

  before(() => {
    // Create a discount to update
    cy.request('POST', '/api/discounts', {
      name: 'Existing Discount',
      code: 'EXISTING',
      percentage: 10,
      validFrom: '2024-01-01',
      validTo: '2024-12-31'
    }).then((response) => {
      existingDiscountId = response.body.id
    })
  })

  it('should update an existing discount with valid data', () => {
    const updatedDiscount = {
      name: 'Updated Discount',
      percentage: 20
    }

    cy.request('PUT', `/api/discounts/${existingDiscountId}`, updatedDiscount)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.include(updatedDiscount)
        expect(response.body.id).to.eq(existingDiscountId)
      })
  })

  // Add more test cases as needed
})
```

## Database Management for Tests

It's recommended to use a separate test database for E2E testing. Here are two approaches:

### Using Custom Cypress Tasks

In your `cypress/plugins/index.js` file:

```javascript
const { MongoClient } = require("mongodb");

module.exports = (on, config) => {
  on("task", {
    async "db:seed"() {
      const client = new MongoClient(config.env.MONGODB_URI);
      try {
        await client.connect();
        const db = client.db(config.env.MONGODB_DBNAME);

        // Clear existing data
        await db.collection("discounts").deleteMany({});

        // Insert seed data
        await db.collection("discounts").insertMany([
          { name: "Summer Sale", code: "SUMMER2024", percentage: 15 },
          { name: "Winter Sale", code: "WINTER2024", percentage: 20 },
          // Add more seed data as needed
        ]);

        return null;
      } finally {
        await client.close();
      }
    },

    async "db:clear"() {
      const client = new MongoClient(config.env.MONGODB_URI);
      try {
        await client.connect();
        const db = client.db(config.env.MONGODB_DBNAME);

        await db.collection("discounts").deleteMany({});

        return null;
      } finally {
        await client.close();
      }
    },
  });
};
```

In your Cypress tests:

```javascript
describe("Discounts API", () => {
  beforeEach(() => {
    cy.task("db:seed");
  });

  afterEach(() => {
    cy.task("db:clear");
  });

  // Your test cases here
});
```

### Using Docker for MySQL

Create a `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  test-db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: testdb
      MYSQL_USER: testuser
      MYSQL_PASSWORD: testpassword
    ports:
      - "3306:3306"
    command: --default-authentication-plugin=mysql_native_password
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      timeout: 20s
      retries: 10
```

Add scripts to your `package.json`:

```json
"scripts": {
  "test:db:up": "docker-compose up -d",
  "test:db:down": "docker-compose down"
}
```

Run these commands before and after your tests:

```
yarn run test:db:up
# Run your tests
yarn run test:db:down
```

## CI Integration

For CI environments (e.g., GitHub Actions), ensure Docker is available and start the container before running tests. Here's an example workflow:

```yaml
name: CI

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"
      - run: npm ci
      - name: Start MySQL
        run: npm run test:db:up
      - name: Run tests
        run: npm test
      - name: Stop MySQL
        run: npm run test:db:down
```

## Best Practices and Tips

1. Use environment variables to switch between test and production databases:

   For MySQL:

   ```javascript
   const sequelize = new Sequelize(
     process.env.NODE_ENV === "test"
       ? "sqlite::memory:"
       : "your_regular_database_config_here",
   );
   ```

   For MongoDB:

   ```javascript
   const { MongoMemoryServer } = require("mongodb-memory-server");

   let mongoUri;
   let mongoServer;

   if (process.env.NODE_ENV === "test") {
     mongoServer = await MongoMemoryServer.create();
     mongoUri = mongoServer.getUri();
   } else {
     mongoUri = environment.dbURI;
   }
   ```

2. Handle potential connection issues, especially when using Docker containers.
3. Use consistent data across all tests to ensure reproducibility.
4. Implement proper error handling and timeouts in your tests.
5. Regularly update your Cypress version to benefit from the latest features and bug fixes.

Remember to adapt these examples and practices to fit your specific application structure and requirements.

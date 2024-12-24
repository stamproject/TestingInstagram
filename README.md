# Instagram Playwright Tests with Page Object Model (POM)

This repository contains a set of automated tests for Instagram using **Playwright**. The tests are written following the **Page Object Model (POM)** design pattern to promote maintainability and reusability.

## Project Overview

The tests are designed to verify various features of the Instagram web application. Playwright is used for browser automation, and the tests are structured using the Page Object Model, which makes it easy to maintain and extend.

## Features

- **Playwright for Browser Automation**: Playwright is used to interact with the browser and perform automated actions such as login, navigation, and form submissions.
- **Page Object Model (POM)**: The tests are structured using POM, allowing for a clean separation of test logic and page-specific interactions.
- **Cross-Browser Testing**: The tests can be run across multiple browsers.
- **Instagram-specific Scenarios**: The tests cover common Instagram user interactions such as login, post commenting, and following users.

## Prerequisites

Before running the tests, ensure you have the following:

- **Node.js** (version 14 or above)
- **Playwright** (installable via npm)
- **A GitHub account** (for pulling the repository and viewing results)

## Installation

To get started with this repository, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/instagram-playwright-tests.git
   cd instagram-playwright-tests

2. **Install the dependencies**:
    npm install
   
4. **Install Playwright browsers**:
    npx playwright install
   Running the Tests

**To run the tests, use the following command**:
    npx playwright test
    This will execute all the tests in the tests/ directory.

**To run a specific test, use**:
  npx playwright test tests/normalTests/login.spec.js

# Pesa Haraka Fee Calculator

## 1. Project Description

Pesa Haraka Fee Calculator is a simple JavaScript-based transaction fee calculator that simulates a mobile money transaction system. It allows customers to select a transaction type, enter their phone number and transaction amount, calculate the applicable transaction fee, and generate a transaction receipt.

The project demonstrates fundamental JavaScript programming concepts, including variables, constants, strings, numbers, user input, conditional statements, switch statements, regular expressions, mathematical calculations, and template literals.

## 2. Project Objectives

The main objectives of this project are to:

- Collect customer details using `prompt()`.
- Validate customer names and phone numbers.
- Allow customers to select different transaction types.
- Validate transaction amounts against specified limits.
- Calculate transaction fees based on the transaction type and amount.
- Generate a unique six-digit transaction reference number.
- Produce a formatted transaction receipt.
- Practise JavaScript programming fundamentals.

## 3. Key Features

The application provides the following features:

1. **Customer Information:** Requests the customer's full name.
2. **Phone Number Validation:** Accepts Kenyan mobile numbers starting with `07` or `01`.
3. **Phone Number Formatting:** Converts phone numbers into international format beginning with `254`.
4. **Transaction Selection:** Supports three transaction types:
   - Send Money
   - Withdraw Cash
   - Pay a Business
5. **Transaction Amount Validation:** Checks that the amount is a valid positive number.
6. **Transaction Limits:** Enforces the maximum transaction amount of KSh 150,000 and a minimum withdrawal amount of KSh 50.
7. **Fee Calculation:** Calculates transaction fees according to the transaction type and amount.
8. **Reference Number Generation:** Generates a random six-digit transaction reference number.
9. **Receipt Generation:** Displays a formatted receipt containing customer details, transaction information, fees, and the total amount.

## 4. Transaction Limits

| Description | Limit |
|---|---:|
| Minimum withdrawal | KSh 50 |
| Maximum transaction amount | KSh 150,000 |
| Send money below or equal to KSh 100 | Free |
| Pay a business | Free in this implementation |

## 5. Transaction Fee Structure

The calculator uses the following fee structure:

| Transaction Amount (KSh) | Send Money (KSh) | Withdraw Cash (KSh) |
|---|---:|---:|
| 1–100 | Free | 11 |
| 101–1,000 | 13 | 29 |
| 1,001–5,000 | 53 | 69 |
| 5,001–20,000 | 87 | 185 |
| 20,001–150,000 | 108 | 309 |

**Note:** These are illustrative fee rules implemented for this programming exercise. They should not be interpreted as official or current mobile money provider tariffs.

## 6. Technologies Used

- **JavaScript:** Main programming language.
- **HTML:** Provides the browser environment for executing JavaScript.
- **Browser Console:** Displays validation messages and transaction receipts.

## 7. JavaScript Concepts Demonstrated

| JavaScript Concept | Application |
|---|---|
| `const` | Declaring fixed values and customer information |
| `let` | Storing transaction fees and transaction types |
| `prompt()` | Collecting customer input |
| `console.log()` | Displaying messages and receipts |
| `if...else` | Validating customer information and transaction amounts |
| `switch` | Selecting transaction types |
| `Number()` | Converting transaction input into numbers |
| `Number.isNaN()` | Checking invalid numerical input |
| `.trim()` | Removing unnecessary spaces |
| `.replace()` | Removing spaces from phone numbers |
| Regular expressions | Validating Kenyan phone numbers |
| Ternary operator | Displaying free or paid transaction fees |
| Template literals | Generating formatted transaction receipts |
| `Math.random()` | Generating transaction reference numbers |
| `.toLocaleString()` | Formatting amounts with thousands separators |

## 8. How to Run the Project

Follow these steps to execute the program:

1. Clone or download the project repository from GitHub.
2. Open the project folder using Visual Studio Code.
3. Create or open the JavaScript file containing the Pesa Haraka code.
4. Save the file as `app.js`.
5. Create an HTML file and link the JavaScript file using:

   ```html
   <script src="app.js"></script>
   ```

6. Open the HTML file in a web browser.
7. Follow the prompts to enter the customer's details and transaction information.
8. Open the browser Developer Tools using `F12`.
9. Select the **Console** tab to view validation messages and the generated transaction receipt.

## 9. Testing the Application

The following test cases can be used to verify the program:

| Test Case | Input | Expected Result |
|---|---|---|
| Valid customer name | Paul Ekitoe | Accepted |
| Empty customer name | Blank input | Transaction cancelled |
| Valid phone number | 0712345678 | Accepted |
| Invalid phone number | 123456 | Rejected |
| Valid transaction type | 1, 2 or 3 | Accepted |
| Invalid transaction type | 4 | Rejected |
| Valid transaction amount | 5,000 | Accepted |
| Invalid transaction amount | three | Rejected |
| Zero transaction amount | 0 | Rejected |
| Amount above maximum | 160,000 | Rejected |
| Withdrawal below minimum | 30 | Rejected |
| Valid transaction | 1,000 | Receipt generated |

## 10. Project Limitations

- The application runs in a browser and uses prompt-based input.
- Transaction information is not stored in a database.
- The reference number is randomly generated and is not guaranteed to be unique.
- The application does not connect to an actual mobile money service.
- The transaction fee structure is illustrative and can be modified.

## 11. Future Improvements

The project can be enhanced by:

- Developing a graphical user interface (GUI).
- Adding transaction history.
- Integrating a database for storing transactions.
- Implementing stronger phone number validation.
- Introducing downloadable and printable receipts.
- Integrating an actual mobile money payment API.

## 12. Author

**Paul Ekitoe**

JavaScript Programming Practice Project

## 13. License

This project is intended for educational and learning purposes.

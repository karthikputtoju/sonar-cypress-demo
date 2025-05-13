const userInput = "1 OR 1=1"; // This is unsafe!
const query = `SELECT * FROM users WHERE id = ${userInput}`;
// Potential SQL Injection here.


cy.visit('http://example.com'); // Should be using HTTPS instead


let userInput = "<script>alert('XSS');</script>";
document.getElementById("output").innerHTML = userInput;
// Vulnerable to XSS

// ❌ Hardcoded credentials — SonarQube flags this as a major security issue
const dbUser = "admin";
const dbPassword = "pass1234"; // Sensitive info in code

module.exports = { dbUser, dbPassword };

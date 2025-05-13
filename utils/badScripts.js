function add(a, b) {
  if (a == null || b == null) {
    console.log("Null values not handled properly");
  }
  if (a == null || b == null) {
    return 0;
  }
  return a + b;
}

function multiply(x, y) {
  return x * y; // Unused
}

module.exports = { add };

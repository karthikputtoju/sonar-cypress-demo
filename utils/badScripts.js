// ❌ Poorly written code for demo purposes
function add(a, b) {
  if (a == null || b == null) {
    console.log("Null values not handled properly"); // Use of console.log (bad practice)
  }

  // ❌ Redundant condition (logic duplication)
  if (a == null || b == null) {
    return 0;
  }

  // ❌ Long method with multiple returns (smell)
  return a + b;
}

// ❌ Unused function (dead code)
function multiply(x, y) {
  return x * y;
}

module.exports = { add };

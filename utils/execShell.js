const { exec } = require('child_process');

// ❌ Dangerous function usage — command injection risk
exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});

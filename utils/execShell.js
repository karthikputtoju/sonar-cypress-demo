const { exec } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
  if (err) console.error(`Error: ${err}`);
  console.log(`Output: ${stdout}`);
});
